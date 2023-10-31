import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ assets, selectedAsset, setAssets, setIsEditing }) => {
  const id = selectedAsset.id;

  const [assetType, setAssetType] = useState(selectedAsset.assetType);
  const [financedBy, setFinancedBy] = useState(selectedAsset.financedBy);
  const [procuredUnder, setProcuredUnder] = useState(
    selectedAsset.procuredUnder
  );
  const [location, setLocation] = useState(selectedAsset.location);
  const [system, setSystem] = useState(selectedAsset.system);
  const [assetCode, setAssetCode] = useState(selectedAsset.assetCode);
  const [serviceTagNo, setServiceTagNo] = useState(selectedAsset.serviceTagNo);
  const [make, setMake] = useState(selectedAsset.make);
  const [model, setModel] = useState(selectedAsset.model);
  const [cpu, setCpu] = useState(selectedAsset.cpu);
  const [cpuGeneration, setCpuGeneration] = useState(
    selectedAsset.cpuGeneration
  );
  const [cpuVersion, setCpuVersion] = useState(selectedAsset.cpuVersion);
  const [cpuSpeed, setCpuSpeed] = useState(selectedAsset.cpuSpeed);
  const [ram, setRam] = useState(selectedAsset.ram);
  const [hardDisk, setHardDisk] = useState(selectedAsset.hardDisk);
  const [hardDiskType, setHardDiskType] = useState(selectedAsset.hardDiskType);
  const [issuedTo, setIssuedTo] = useState(selectedAsset.issued);
  const [projectName, setProjectName] = useState(selectedAsset.projectName);
  const [owner, setOwner] = useState(selectedAsset.owner);
  const [username, setUsername] = useState(selectedAsset.username);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !assetType ||
      !financedBy ||
      !procuredUnder ||
      !location ||
      !system ||
      !assetCode ||
      !serviceTagNo ||
      !make ||
      !model ||
      !cpu ||
      !cpuGeneration ||
      !cpuVersion ||
      !cpuSpeed ||
      !ram ||
      !hardDisk ||
      !hardDiskType ||
      !issuedTo ||
      !projectName ||
      !owner ||
      !username
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const asset = {
      id,
      assetType,
      financedBy,
      procuredUnder,
      location,
      system,
      assetCode,
      serviceTagNo,
      make,
      model,
      cpu,
      cpuGeneration,
      cpuVersion,
      cpuSpeed,
      ram,
      hardDisk,
      hardDiskType,
      issuedTo,
      projectName,
      owner,
      username,
    };

    for (let i = 0; i < assets.length; i++) {
      if (assets[i].id === id) {
        assets.splice(i, 1, asset);
        break;
      }
    }

    setAssets(assets);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${asset.make} ${asset.model}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Assets</h1>
        <label htmlFor="assetType">Asset Type</label>
        <input
          id=" assetType"
          type="text"
          name="assetType"
          value={assetType}
          onChange={(e) => setAssetType(e.target.value)}
        />
        <label htmlFor="financedBy">Financed By</label>
        <input
          id=" financedBy"
          type="text"
          name="financeBy"
          value={financedBy}
          onChange={(e) => setFinancedBy(e.target.value)}
        />
        <label htmlFor="procuredUnder">Procured Under</label>
        <input
          id=" procuredUnder"
          type="procuredUnder"
          name="procuredUnder"
          value={procuredUnder}
          onChange={(e) => setProcuredUnder(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="system">System</label>
        <input
          id=" system"
          type="system"
          name="system"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
        />
        <label htmlFor="assetCode">Asset Code</label>
        <input
          id="assetCode"
          type="assetCode"
          name="assetCode"
          value={assetCode}
          onChange={(e) => setAssetCode(e.target.value)}
        />
        <label htmlFor="serviceTagNo">Service Tag No.</label>
        <input
          id="serviceTagNo"
          type="serviceTagNo"
          name="serviceTagNo"
          value={serviceTagNo}
          onChange={(e) => setServiceTagNo(e.target.value)}
        />
        <label htmlFor="make">Make</label>
        <input
          id=" make"
          type="make"
          name="make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <label htmlFor="model">Model</label>
        <input
          id=" model"
          type="model"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <label htmlFor="cpu">CPU</label>
        <input
          id="cpu"
          type="cpu"
          name="cpu"
          value={cpu}
          onChange={(e) => setCpu(e.target.value)}
        />
        <label htmlFor="cpuGeneration">CPU Generation</label>
        <input
          id="cpuGeneration"
          type="cpuGeneration"
          name="cpuGeneration"
          value={cpuGeneration}
          onChange={(e) => setCpuGeneration(e.target.value)}
        />
        <label htmlFor="cpuVersion">CPU Version</label>
        <input
          id="cpuVersion"
          type="cpuVersion"
          name="cpuVersion"
          value={cpuVersion}
          onChange={(e) => setCpuVersion(e.target.value)}
        />
        <label htmlFor="cpuSpeed">CPU Speed</label>
        <input
          id="cpuSpeed"
          type="cpuSpeed"
          name="cpuSpeed"
          value={cpuSpeed}
          onChange={(e) => setCpuSpeed(e.target.value)}
        />
        <label htmlFor="ram">RAM</label>
        <input
          id="ram"
          type="ram"
          name="ram"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
        />
        <label htmlFor="hardDisk">Hard Disk</label>
        <input
          id="hardDisk"
          type="hardDisk"
          name="hardDisk"
          value={hardDisk}
          onChange={(e) => setHardDisk(e.target.value)}
        />
        <label htmlFor="hardDiskType">Hard Disk Type</label>
        <input
          id="hardDiskType"
          type="hardDiskType"
          name="hardDiskType"
          value={hardDiskType}
          onChange={(e) => setHardDiskType(e.target.value)}
        />
        <label htmlFor="issuedTo">Issued To</label>
        <input
          id="issuedTo"
          type="issuedTo"
          name="issuedTo"
          value={issuedTo}
          onChange={(e) => setIssuedTo(e.target.value)}
        />
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          type="projectName"
          name="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label htmlFor="owner">Owner/Project Name</label>
        <input
          id="owner"
          type="owner"
          name="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
