import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
// import { TicketService } from "../service/TicketService";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRef } from "react";

const TicketTable = ({ user }) => {
  const [tickets, setTickets] = useState([]);
  const dt = useRef(null);
  const navigate = useNavigate();
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[0].value);
  const [priorities] = useState([
    "High Priority",
    "Medium Priority",
    "Low Priority",
  ]);
  const [statuses] = useState(["Resolved", "Pending", "New"]);
  const [selectedTickets, setSelectedTickets] = useState(null);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  console.log("my logged Inuse", user);

  const formatDate = (date) => {
    const options = {
      weekday: "short", // Mon
      day: "2-digit", // 21
      month: "short", // Aug
      year: "numeric", // 2023
      hour: "2-digit", // 12
      minute: "2-digit", // 05
      second: "2-digit", // 21
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get("http://localhost:8002/tickets");
        console.log("response data", res.data);
        setTickets(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchTickets();
    initFilters();
  }, []);

  const statusBodyTemplate = (ticket) => {
    return (
      <Tag
        value={ticket.status}
        severity={getSeverity(ticket)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };
  const priorityBodyTemplate = (ticket) => {
    return (
      <Tag
        value={ticket.priority}
        severity={getPrioritySeverity(ticket)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };
  const priorityApprovalTemplate = (ticket) => {
    return (
      <Tag
        value={ticket.approvedByManager || "Not Required"}
        severity={getApprovalSeverity(ticket)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };

  const getSeverity = (ticket) => {
    switch (ticket.status) {
      case "Closed":
        return "success";

      case "New":
        return "info";

      case "Open":
        return "danger";

      case "Resolved":
        return "warning";

      default:
        return null;
    }
  };
  const getPrioritySeverity = (ticket) => {
    switch (ticket.priority) {
      case "Low":
        return "success";

      case "Medium":
        return "warning";

      case "High":
        return "danger";

      default:
        return null;
    }
  };
  const getApprovalSeverity = (ticket) => {
    switch (ticket.approvedByManager) {
      case "Yes":
        return "success";

      case "Not Required":
        return "warning";

      case "No":
        return "danger";

      default:
        return null;
    }
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      location: { value: null, matchMode: FilterMatchMode.CONTAINS },
      ticketId: { value: null, matchMode: FilterMatchMode.CONTAINS },
      createdBy: { value: null, matchMode: FilterMatchMode.CONTAINS },
      requestType: { value: null, matchMode: FilterMatchMode.CONTAINS },
      createdAt: { value: null, matchMode: FilterMatchMode.CONTAINS },
      priority: { value: null, matchMode: FilterMatchMode.CONTAINS },
      assignedTo: { value: null, matchMode: FilterMatchMode.CONTAINS },
      status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };
  const clearFilter = () => {
    initFilters();
  };
  const onRowEditComplete = (e) => {
    let _tickets = [...tickets];
    let { newData, index } = e;

    _tickets[index] = newData;

    setTickets(_tickets);
  };

  // const textEditor = (options) => {
  //   return (
  //     <InputText
  //       type="text"
  //       value={options.value}
  //       onChange={(e) => options.editorCallback(e.target.value)}
  //     />
  //   );
  // };
  const userBodyTemplate = (rowData) => {
    console.log("My ROM Data", rowData);
    const createdBy = rowData.createdBy;
    console.log("My latest Created By Should be Object right", createdBy);

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={createdBy.fullName}
            src={`http://localhost:8002${createdBy.profileImageURL}`}
            width="40"
            height="40"
          />
          <Link
            to={`/userview/${rowData._id}`}
            className="ml-2 text-green-500 hover:text-green-900"
          >
            {createdBy.fullName}
          </Link>
        </div>
      </div>
    );
  };

  const sendMessageOnTicketAssignment = async (data) => {
    const messageData = {
      ticketId: data._id,
      senderId: user._id,
      senderName: user.fullName,
      senderImage: user.profileImageURL,
      text: `Ticket has been assigned to  ${user.fullName} on ${formatDate(
        Date.now()
      )}`,
    };

    // send the message to the backend API

    try {
      const response = await axios.post(
        `http://localhost:8002/messages`,
        messageData
      );
      console.log("resojnse", response.data);

      // setMessages([...messages, response.data]);
      // setLatestMessage(response.data);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };
  const assignedBodyTemplate = (rowData) => {
    // console.log("Raw Ticket data", rowData._id);
    const assignedTo = rowData.assignedTo;
    console.log("My Latest Assigned To", assignedTo);

    if (!assignedTo._id) {
      // Ticket is unassigned
      return (
        <div className="flex flex-col align-items-center gap-2 mr-2">
          <div className="flex flex-row items-center justify-center">
            {/* <span>Not Assigned Yet</span> */}
            <button
              className="bg-blue-500 hover:bg-blue-700 border-none p-3 rounded-lg text-white ml-4 -mr-6"
              onClick={() => {
                handleTicketAssignment(rowData._id, rowData.ticketId);
                sendMessageOnTicketAssignment(rowData);
              }}
              // disabled={rowData.isAssigned}
            >
              Take Ownership
            </button>
          </div>
        </div>
      );
    } else {
      // tIcket Is Assigned
      return (
        <div className="flex flex-col align-items-center gap-2 mr-2">
          <div className="flex flex-row  items-center justify-start">
            <img
              alt={assignedTo.fullName}
              src={`http://localhost:8002${assignedTo.profileImageURL}`}
              width="40"
              height="40"
            />
            <Link
              to={`/userview/${rowData._id}`}
              className="ml-2 text-green-500 hover:text-green-900"
            >
              {assignedTo.fullName}
            </Link>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 border-none p-3 rounded-lg text-white ml-4 -mr-6"
              // onClick={handleTicketAssignment}
              // disabled={rowData.isAssigned}
            >
              Assigned to You
            </button> */}
          </div>
        </div>
      );
    }
  };

  // const priorityEditor = (options) => {
  //   return (
  //     <Dropdown
  //       value={options.value}
  //       options={priorities}
  //       onChange={(e) => options.editorCallback(e.value)}
  //       placeholder="Select Priority"
  //       itemTemplate={(option) => {
  //         return <Tag value={option} severity={getSeverity(option)}></Tag>;
  //       }}
  //     />
  //   );
  // };
  // const statusEditor = (options) => {
  //   return (
  //     <Dropdown
  //       value={options.value}
  //       options={statuses}
  //       onChange={(e) => options.editorCallback(e.value)}
  //       placeholder="Change Status"
  //       itemTemplate={(option) => {
  //         return <Tag value={option} severity={getSeverity(option)}></Tag>;
  //       }}
  //     />
  //   );
  // };

  const columns = [
    {
      field: "id",
      header: "S.No",
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.serialNumber}
        </Link>
      ),
      sortable: true,
      bodyStyle: {
        textAlign: "center",
      },
    },
    {
      field: "ticketId",
      header: "Ticket ID",
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.ticketId}
        </Link>
      ),
      bodyStyle: {
        textAlign: "center",
        minWidth: "7rem",
      },
      sortable: true,
    },
    {
      field: "createdBy",
      header: "Created By",
      body: userBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        minWidth: "8rem",
        // Customize the style as needed
      },
      style: { minWidth: "150px" },
      sortable: true,
    },
    {
      field: "location",
      header: "Location",
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.location || "N/A"}
        </Link>
      ),
      bodyStyle: {
        textAlign: "center",
        minWidth: "8rem",
        // Customize the style as needed
      },
      style: { minWidth: "100px" },
      sortable: true,
    },
    {
      field: "requestType",
      header: "Request Type",
      bodyStyle: {
        textAlign: "center",
        minWidth: "10rem", // Customize the style as needed
      },
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.requestType}
        </Link>
      ),
      sortable: true,
    },
    {
      field: "createdAt",
      header: "Created On",
      bodyStyle: {
        textAlign: "center",
        minWidth: "8rem",
      },
      body: (rowData) => (
        <Link
          to={`/ticketview/${rowData._id}`}
          className="text-yellow-500 hover:text-blue-900"
        >
          {/* {new Date(rowData.createdAt).toDateString()} */}
          {formatDate(rowData.createdAt)}
        </Link>
      ),
      sortable: true,
    },
    {
      field: "priority",
      header: "Priority",
      body: priorityBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        pointer: "cursor",
      },
      sortable: true,
    },
    {
      field: "approvedByManager",
      header: "Manager Approval",
      body: priorityApprovalTemplate,
      bodyStyle: {
        textAlign: "center",
        pointer: "cursor",
        minWidth: "6rem",
      },
      sortable: true,
    },
    {
      field: "assignedTo",
      header: "Assigned To",
      body: assignedBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        minWidth: "15rem", // Customize the style as needed
      },
      style: { minWidth: "200px" },
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      bodyStyle: {
        textAlign: "center",
      },
      body: statusBodyTemplate,
      sortable: true,
    },
  ];
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };

  const handleNewTicketCreation = () => {
    navigate("/new-ticket");
  };

  const handleTicketAssignment = async (ticketObjId, ticketId) => {
    console.log("My assignemnt User", user);
    try {
      const assignTicketTo = {
        assignedTo: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          employeeCode: user.employeeCode,
          profileImageURL: user.profileImageURL,
        },
        status: "Open",
      };

      //Pathch request for updatingh ticket
      const res = await axios.patch(
        `http://localhost:8002/tickets/${ticketObjId}`,
        assignTicketTo
      );
      console.log(`Ticket ${ticketObjId} assigned successfully!`, res);
      toast.success(`Ticket ${ticketId} assigned successfully!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(`Error assigning ticket ${ticketObjId}`, error);
      toast.error(`Error assigning ticket ${ticketObjId}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));
  const preprocessDataForExport = (data) => {
    console.log("Data for Export:", data);
    return data.map((ticket) => ({
      ...ticket,
      createdBy: ticket.createdBy.name, // Extract the relevant property
      assignedTo: ticket.assignedTo.name, // Extract the relevant property
    }));
  };

  const exportCSV = (selectionOnly) => {
    const exportedData = preprocessDataForExport(tickets);
    dt.current.exportCSV({ selectionOnly, value: exportedData });
  };

  const exportPdf = () => {
    const exportedData = preprocessDataForExport(tickets);

    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, exportedData);

        doc.save("tickets.pdf");
      });
    });
  };

  const exportExcel = () => {
    const exportedData = preprocessDataForExport(tickets);
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(exportedData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "tickets");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  const header = (
    <div className="flex justify-between mb-4">
      <div className="flex justify-content-center mb-4">
        <Dropdown
          value={size}
          onChange={(e) => setSize(e.value)}
          options={sizeOptions}
          optionLabel="label"
          editable
          placeholder="Change Size"
          className="w-32 md:w-14rem h-14"
        />
      </div>
      <div>
        <MultiSelect
          value={visibleColumns}
          options={columns}
          optionLabel="header"
          onChange={onColumnToggle}
          className="w-48 sm:w-20rem ml-2 h-14"
          display="chip"
        />
      </div>
      <div className="w-1/2 ml-2">
        <button
          className="bg-green-500 border-none p-3 rounded-lg text-white h-14"
          onClick={handleNewTicketCreation}
        >
          Create New Ticket
        </button>
      </div>
      <div className="flex flex-row align-items-center justify-content-end gap-2 mr-4 w-1/2 h-14">
        <Button
          type="button"
          icon="pi pi-file"
          label="Export CSV"
          onClick={() => exportCSV(false)}
          data-pr-tooltip="CSV"
          title="Export CSV"
          className="w-1/2"
        />
        <Button
          type="button"
          icon="pi pi-file-excel"
          label="Export Excel"
          severity="success"
          onClick={exportExcel}
          data-pr-tooltip="XLS"
          title="Export Excel"
        />
        <Button
          type="button"
          icon="pi pi-file-pdf"
          label="Export PDF"
          severity="warning"
          onClick={exportPdf}
          data-pr-tooltip="PDF"
          title="Export PDF"
        />
      </div>
      <div className="flex justify-center items-center mr-2 -mt-2 w-1/4">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search"
            className="h-14"
          />
        </span>
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label=""
          outlined
          style={{ marginLeft: "5px" }}
          onClick={clearFilter}
          className={` h-14 ${
            globalFilterValue ? "p-button-danger p-ml-2" : ""
          }`}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden card p-fluid">
      <h1>All Tickets</h1>
      <div style={{ overflowX: "auto", width: "100%" }}>
        <DataTable
          value={tickets}
          header={header}
          showGridlines
          size={size}
          ref={dt}
          tableStyle={{ overflow: "auto" }}
          className="shadow-md rounded-lg"
          stripedRows
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          removableSort
          sortField="createdAt"
          sortOrder={-1}
          filters={filters}
          globalFilterFields={[
            "ticketId",
            "createdBy",
            "requestType",
            "createdAt",
            "priority",
            "assignedTo",
            "location",
            "status",
          ]}
          emptyMessage="No Tickets found."
          editMode="row"
          dataKey="_id"
          onRowEditComplete={onRowEditComplete}
          scrollable
          scrollHeight="400px"
          selectionMode={"checkbox"}
          selection={selectedTickets}
          onSelectionChange={(e) => setSelectedTickets(e.value)}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          {visibleColumns.map((column, index) => (
            <Column
              key={index}
              {...column}
              headerStyle={{
                textAlign: "center",
              }}
            />
          ))}
        </DataTable>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TicketTable;
