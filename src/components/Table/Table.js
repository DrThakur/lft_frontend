import React, { useState, useEffect, useCallback, useMemo } from "react";
import { assetData } from "../../data/AssetData/AssetData";
import DataTable from "react-data-table-component";
import { AiOutlineExport } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { LuEdit } from "react-icons/lu";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function convertArrayOfObjectsToCSV(array) {
  let result;
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Table = ({ filteredCategory }) => {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [dense, setDense] = useState(false);
  const navigate = useNavigate();

  const headerClass = "font-bold";

  const handleAddNew = () => {
    // Logic to navigate to the add new item page
    // You can implement the desired functionality here
    console.log("Added New Item");
    navigate("/create-asset");
  };

  const handleExport = () => {
    downloadCSV(assetData);
  };

  const actionsMemo = useMemo(
    () => [
      <div key="actions" className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div
            className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${
              dense ? "bg-blue-600" : ""
            }`}
            onClick={() => setDense((prevDense) => !prevDense)}
          ></div>
          <span className="ml-3 mr-1 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dense
          </span>
        </label>
        <button
          key="add-new"
          className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white mr-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm inline-flex items-center"
          onClick={handleAddNew}
        >
          <BsFillPlusCircleFill className="w-4 h-4 mr-2" />
          <span> Add New Item</span>
        </button>
        <button
          key="export"
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm inline-flex items-center"
          onClick={handleExport}
        >
          <span> Export</span>
          <AiOutlineExport className="w-4 h-4 ml-2" />
        </button>
      </div>,
    ],
    [dense]
  );

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  //   console.log("I am selectedRows", selectedRows);
  const contextActions = useMemo(() => {
    const handleEdit = (id) => {
      //  const [asset] = assets.filter((asset) => asset.id === id);
      // console.log("Yes I am  editing");
      Swal.fire({
        icon: "info",
        title: "Let's Edit",
        text: "You will be redirected to next page",
        showConfirmButton: true,
      });
      //  setSelectedRows(asset);
      //  setIsEditing(true);
    };

    const handleDelete = (id) => {
      Swal.fire({
        icon: "warning",
        title: "Are you sure ?",
        text: "You won't be able to revert this",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "No, cancel",
      }).then((result) => {
        if (result.value) {
          const [asset] = assets.filter((asset) => asset.id === id);

          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: `Selected data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });

          setToggleCleared(!toggleCleared);
          setAssets(
            assets.filter(
              (asset) => !selectedRows.find((row) => row.id === asset.id)
            )
          );
        }
      });
    };

    return (
      <div className="space-x-2 border-1 shadow-md">
        {selectedRows.length === 1 && (
          <button
            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-sm inline-flex items-center"
            key="edit"
            onClick={handleEdit}
            icon
          >
            <LuEdit className="w-4 h-4 mr-2" />
            <span> Edit</span>
          </button>
        )}

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-red-700 rounded text-sm inline-flex items-center"
          key="delete"
          onClick={handleDelete}
          icon
        >
          <MdDelete className="w-4 h-4 mr-2" />
          <span> Delete</span>
        </button>
      </div>
    );
  }, [assets, selectedRows, toggleCleared]);

  const getAssets = async () => {
    try {
      setAssets(assetData);
      setFilteredAssets(assetData);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      headerClass: headerClass,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      name: "System",
      selector: (row) => row.system,
      sortable: true,
    },
    {
      name: "Asset Code",
      selector: (row) => row.assetCode,
      sortable: true,
    },
    {
      name: "Service Tag No",
      selector: (row) => row.serviceTagNo,
      sortable: true,
    },
    {
      name: "Make",
      selector: (row) => row.make,
      sortable: true,
    },
    {
      name: "CPU",
      selector: (row) => row.cpu,
      sortable: true,
    },
    {
      name: "CPU Generation",
      selector: (row) => row.cpuGeneration,
      sortable: true,
    },
    {
      name: "CPU Version",
      selector: (row) => row.cpuVersion,
      sortable: true,
    },
    {
      name: "CPU Speed",
      selector: (row) => row.cpuSpeed,
      sortable: true,
    },
    {
      name: "RAM",
      selector: (row) => row.ram,
      sortable: true,
    },
    {
      name: "Hard Disk",
      selector: (row) => row.hardDisk,
      sortable: true,
    },
    {
      name: "Hard Disk Type",
      selector: (row) => row.hardDiskType,
      sortable: true,
    },
    {
      name: "Issue To",
      selector: (row) => row.issuedTo,
      sortable: true,
    },
    {
      name: "Project Name",
      selector: (row) => row.projectName,
      sortable: true,
    },
    {
      name: "Owner",
      selector: (row) => row.owner,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
  ];

  useEffect(() => {
    getAssets();
  }, []);

  //   useEffect(() => {
  //     const result = assets.filter((asset) => {
  //       return asset.make.toLowerCase().match(search.toLowerCase());
  //     });
  //     setFilteredAssets(result);
  //   }, [search, assets]);
  useEffect(() => {
    const result = assets.filter((asset) => {
      const categoryMatch =
        filteredCategory === "All" || asset.category === filteredCategory;
      const searchMatch = asset.make.toLowerCase().match(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
    setFilteredAssets(result);
  }, [search, filteredCategory, assets]);
  //   console.log(assetData);
  return (
    <div style={{ maxWidth: "61rem" }} className="h-screen">
      <DataTable
        title="Asset List"
        columns={columns}
        data={filteredAssets}
        headerClass={headerClass}
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
        dense={dense}
        fixedHeader
        fixedHeaderScrollHeight="350px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        //   actions={
        //     <>
        //       <button className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm inline-flex items-center">
        //         <BsFillPlusCircleFill className="w-4 h-4 mr-2" />
        //         <span> Add New Asset</span>
        //       </button>
        //       <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-sm inline-flex items-center">
        //         <span> Export</span>
        //         <AiOutlineExport className="w-4 h-4 ml-2" />
        //       </button>
        //     </>
        //   }
        actions={actionsMemo}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search here"
            className="relative mb-4 flex w-1/4 flex-wrap px-2 py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  );
};

export default Table;
