import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
// import { UserService } from "../service/UserService";
import { FilterMatchMode } from "primereact/api";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Link, useNavigate } from "react-router-dom";
import "./Table.css";
import axios from "axios";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";

const Table = () => {
  const [users, setUsers] = useState([]);
  const dt = useRef(null);
  const navigate = useNavigate();
  const [sizeOptions] = useState([
    { label: "Small", value: "small" },
    { label: "Normal", value: "normal" },
    { label: "Large", value: "large" },
  ]);
  const [size, setSize] = useState(sizeOptions[0].value);
  const [departments] = useState([
    "Software Engineering",
    "Verification",
    "FPGA",
    "IT Department",
  ]);
  const [locations] = useState([
    "Guragaon",
    "Bangalore",
    "Hyedrabad",
    "Kolkata",
  ]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const statusBodyTemplate = (user) => {
    console.log("status user", user);
    return (
      <Tag
        value={user.status}
        severity={getSeverity(user)}
        style={{ fontSize: "10px" }}
      ></Tag>
    );
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8002/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchUsers();
    initFilters();
  }, []);

  const getSeverity = (user) => {
    switch (user.status) {
      case "Active":
        return "success";

      case "Hold":
        return "warning";

      case "Inactive":
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
      name: { value: null, matchMode: FilterMatchMode.CONTAINS },
      designation: { value: null, matchMode: FilterMatchMode.CONTAINS },
      emailID: { value: null, matchMode: FilterMatchMode.CONTAINS },
      username: { value: null, matchMode: FilterMatchMode.CONTAINS },
      department: { value: null, matchMode: FilterMatchMode.CONTAINS },
      location: { value: null, matchMode: FilterMatchMode.CONTAINS },
      reportingManager: { value: null, matchMode: FilterMatchMode.CONTAINS },
      status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    setGlobalFilterValue("");
  };
  const clearFilter = () => {
    initFilters();
  };
  const onRowEditComplete = (e) => {
    let _users = [...users];
    let { newData, index } = e;

    _users[index] = newData;

    setUsers(_users);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };
  const employeeBodyTemplate = (rowData) => {
    const employee = rowData;

    return (
      <div className="flex flex-col align-items-center gap-2 mr-2">
        <div className="flex flex-row items-center justify-start">
          <img
            alt={employee.fullName}
            src={`http://localhost:8002${employee.profileImageURL}`}
            width="32"
            height="32"
          />
          <Link
            to={`/userview/${rowData._id}`}
            className="ml-2 text-green-500 hover:text-green-900"
          >
            {employee.fullName}
          </Link>
        </div>
      </div>
    );
  };

  const departmentEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={departments}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Change Department"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };
  const locationEditor = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={locations}
        onChange={(e) => options.editorCallback(e.value)}
        placeholder="Change Location"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const columns = [
    {
      field: "employeeCode",
      header: "Employee Code",
      sortable: true,
      bodyStyle: {
        textAlign: "center",
        minWidth: "12rem", // Customize the style as needed
      },
    },
    {
      field: "fullName",
      header: "Name",
      body: employeeBodyTemplate,
      bodyStyle: {
        textAlign: "center",
        minWidth: "16rem", // Customize the style as needed
      },
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "designation",
      header: "Designation",
      bodyStyle: {
        textAlign: "center",
        minWidth: "12rem", // Customize the style as needed
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.designation}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "emailID",
      header: "Email ID",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-yellow-500 hover:text-blue-900"
        >
          {rowData.email}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "phoneNumber",
      header: "Phone Number",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.phoneNumber || "N/A"}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "username",
      header: "Username",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.username}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "department",
      header: "Department",
      bodyStyle: {
        textAlign: "center",
        width: "20%",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.department}
        </a>
      ),
      editor: (options) => departmentEditor(options),
      sortable: true,
    },
    {
      field: "location",
      header: "Location",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.location}
        </a>
      ),
      editor: (options) => locationEditor(options),
      sortable: true,
    },
    {
      field: "reportingManager",
      header: "Reporting Manager",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.reportingManager}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "issuedAssets",
      header: "Issued Assets",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.issuedAssets || 5}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "issuedLicence",
      header: "Issued Licence",
      bodyStyle: {
        textAlign: "center",
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.issuedLicence || 5}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "totalRaisedTickets",
      header: "Total Raised Tickets",
      bodyStyle: {
        textAlign: "center",
        // Customize the style as needed
      },
      body: (rowData) => (
        <a
          href={`/userview/${rowData._id}`}
          className="text-blue-500 hover:text-blue-900"
        >
          {rowData.totalRaisedTickets || 10}
        </a>
      ),
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      bodyStyle: {
        textAlign: "center",
      },
      body: statusBodyTemplate,
      editor: (options) => textEditor(options),
      sortable: true,
    },
    {
      rowEditor: true,
      headerStyle: { width: "10%", minWidth: "8rem" },
      bodyStyle: { textAlign: "center" },
    },
  ];
  const [visibleColumns, setVisibleColumns] = useState(columns);
  const toast = useRef(null);

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );

    setVisibleColumns(orderedSelectedColumns);
  };

  const handleNewUserCreation = () => {
    navigate("/new-user");
  };

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, users);
        doc.save("users.pdf");
      });
    });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(users);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "users");
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

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const header = (
    <div className="flex flex-row justify-between mb-4">
      <div className="flex justify-content-center mb-4">
        <Dropdown
          value={size}
          onChange={(e) => setSize(e.value)}
          options={sizeOptions}
          optionLabel="label"
          editable
          placeholder="Change Size"
          className="w-32 md:w-14rem"
        />
      </div>
      <div>
        <MultiSelect
          value={visibleColumns}
          options={columns}
          optionLabel="header"
          onChange={onColumnToggle}
          className="w-32 sm:w-20rem ml-2"
          display="chip"
        />
      </div>
      <div className="w-1/2 ml-2">
        <button
          className="bg-green-500 border-none p-3 rounded-lg text-white"
          onClick={handleNewUserCreation}
        >
          Create New User
        </button>
      </div>
      <div className="card flex justify-content-center mr-2 w-full">
        <Toast ref={toast}></Toast>
        <FileUpload
          mode="basic"
          name="file"
          url="http://localhost:8002/users/importFile"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          maxFileSize={1000000}
          onUpload={onUpload}
          chooseLabel="Import New Users"
        />
      </div>
      <div className="flex align-items-center justify-content-end gap-2 mr-4">
        <Button
          type="button"
          icon="pi pi-file"
          rounded
          onClick={() => exportCSV(false)}
          data-pr-tooltip="CSV"
        />
        <Button
          type="button"
          icon="pi pi-file-excel"
          severity="success"
          rounded
          onClick={exportExcel}
          data-pr-tooltip="XLS"
        />
        <Button
          type="button"
          icon="pi pi-file-pdf"
          severity="warning"
          rounded
          onClick={exportPdf}
          data-pr-tooltip="PDF"
        />
      </div>
      <div className="flex justify-center items-center mr-2 -mt-3 w-1/2">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search"
          />
        </span>
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label=""
          outlined
          style={{ marginLeft: "5px" }}
          onClick={clearFilter}
          className={globalFilterValue ? "p-button-danger p-ml-2" : ""}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden card p-fluid">
      <h1 className="text-lg font-bold">All Users</h1>
      <DataTable
        value={users}
        header={header}
        size={size}
        ref={dt}
        showGridlines
        tableStyle={{ overflow: "auto" }}
        className="shadow-md rounded-lg"
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        removableSort
        sortField="id"
        sortOrder={1}
        filters={filters}
        globalFilterFields={[
          "name",
          "designation",
          "emailID",
          "username",
          "department",
          "reportingManager",
          "location",
          "status",
        ]}
        emptyMessage="No User found."
        editMode="row"
        dataKey="_id"
        onRowEditComplete={onRowEditComplete}
        scrollable
        scrollHeight="400px"
        selectionMode="checkbox"
        selection={selectedUsers}
        onSelectionChange={(e) => setSelectedUsers(e.value)}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
        ></Column>
        {visibleColumns.map((column, index) => (
          <Column
            key={index}
            {...column}
            headerStyle={{ textAlign: "center" }}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default Table;
