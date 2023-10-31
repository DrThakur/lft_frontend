import React from "react";
import Form from "../../Form/Form";

const AssetForm = () => {
  const fields = [
    { label: "Asset Type", id: "asset-type", type: "text" },
    { label: "Financed By", id: "financed-by", type: "text" },
    { label: "Procured Under", id: "procured-under", type: "text" },
    { label: "Location", id: "location", type: "text" },
    { label: "System", id: "system", type: "text" },
    { label: "Asset Code", id: "asset-code", type: "text" },
    { label: "Service Tag No.", id: "serive-tag-no", type: "text" },
    { label: "Make", id: "make", type: "text" },
    { label: "Model", id: "model", type: "text" },
    { label: "CPU", id: "cpu", type: "text" },
    { label: "CPU Generation", id: "cpu-generation", type: "text" },
    { label: "CPU Version", id: "cpu-version", type: "text" },
    { label: "CPU Speed", id: "cpu-speed", type: "text" },
    { label: "RAM", id: "ram", type: "text" },
    { label: "Hard Disk", id: "hard-disk", type: "text" },
    { label: "Hard Disk Type", id: "hard-disk-type", type: "text" },
    { label: "Issued To", id: "issued-to", type: "text" },
    { label: "Owner Name / Project Name", id: "owner", type: "text" },
    { label: "Username", id: "username", type: "text" },
    // Add more field objects here
  ];

  return <Form fields={fields} />;
};

export default AssetForm;
