import React from "react";

const List = ({ assets, handleEdit, handleDelete }) => {
  //   const formatter = new Intl.NumberFormat("en-Us", {
  //     style: "currency",
  //     currency: "USD",
  //     minimumFractionDigits: null,
  //   });
  return (
    <div className="conatiner-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Location</th>
            <th>System</th>
            <th>Asset Code</th>
            <th>Service Tag No.</th>
            <th>Make</th>
            <th>Model</th>
            <th>CPU</th>
            {/* <th>CPU Generation</th>
            <th>CPU Speed</th>
            <th>RAM</th>
            <th>Hard Disk</th>
            <th>Hard Disk Type</th>
            <th>Issued To</th>
            <th>Project Name</th>
            <th>Owner Name / Project Name</th> */}
            <th>Username</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.length > 0 ? (
            assets.map((asset, i) => (
              <tr key={asset.id}>
                <td>{i + 1}</td>
                <td>{asset.location}</td>
                <td>{asset.system}</td>
                <td>{asset.assetCode}</td>
                <td>{asset.serviceTagNo}</td>
                <td>{asset.make}</td>
                <td>{asset.model}</td>
                <td>{asset.cpu}</td>
                {/* <td>{asset.cpuGeneration}</td>
                <td>{asset.cpuVersion}</td>
                <td>{asset.cpuSpeed}</td>
                <td>{asset.ram}</td>
                <td>{asset.hardDisk}</td>
                <td>{asset.hardDiskType}</td>
                <td>{asset.issuedTo}</td>
                <td>{asset.projectName}</td>
                <td>{asset.owner}</td> */}
                <td>{asset.username}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(asset.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(asset.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Assets</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
