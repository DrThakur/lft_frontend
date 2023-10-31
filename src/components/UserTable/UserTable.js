import React, { useState } from "react";
import assetCategories from "../../data/UserAssetCategoryData/UserAssetCategoryData";
import DataTable, { createTheme } from "react-data-table-component";

const UserTable = () => {
  const [dense, setDense] = useState(false);
  const details = assetCategories.flatMap((category) =>
    category.details.map((detail) => ({ ...detail, category: category.title }))
  );

  // createTheme(
  //   "solarized",
  //   {
  //     text: {
  //       primary: "#268bd2",
  //       secondary: "#2aa198",
  //     },
  //     background: {
  //       default: "#002b36",
  //     },
  //     context: {
  //       background: "#cb4b16",
  //       text: "#FFFFFF",
  //     },
  //     divider: {
  //       default: "#073642",
  //     },
  //     button: {
  //       default: "#2aa198",
  //       hover: "rgba(0,0,0,.08)",
  //       focus: "rgba(255,255,255,.12)",
  //       disabled: "rgba(255, 255, 255, .34)",
  //     },
  //     sortFocus: {
  //       default: "#2aa198",
  //     },
  //   },
  //   "dark"
  // );
  const columns =
    details[0]?.details?.map((detail) => ({
      name: detail.name,
      selector: (row) => {
        const detailValue = row.details.find(
          (item) => item.name === detail.name
        );
        return detailValue?.value;
      },
      sortable: true,
    })) || [];

  return (
    <div style={{ maxWidth: "100rem" }} className="w-full">
      <DataTable
        columns={columns}
        data={details}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="50vh"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        theme="solarized"
        dense={dense}
      />
    </div>
  );
};

export default UserTable;
