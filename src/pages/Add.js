import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

const Add = ({ assets, setAssets, setIsAdding }) => {
  const [assetType, setAssetType] = useState("");
  const [financedBy, setFinacedBy] = useState("");
  const [procuredUnder, setProcuredUnder] = useState("");
  const [location, setLocation] = useState("");
  const [system, setSystem] = useState("");
  const [assetCode, setAssetCode] = useState("");
  const [serviceTagNo, setServiceTagNo] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [cpu, setCpu] = useState("");
  const [cpuGeneration, setCpuGeneration] = useState("");
  const [cpuVersion, setCpuVersion] = useState("");
  const [cpuSpeed, setCpuSpeed] = useState("");
  const [ram, setRam] = useState("");
  const [hardDisk, setHardDisk] = useState("");
  const [hardDiskType, setHardDiskType] = useState("");
  const [issuedTo, setIssuedTo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [owner, setOwner] = useState("");
  const [username, setUsername] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
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
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    const id = assets.length + 1;
    const newAsset = {
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
    assets.push(newAsset);
    setAssets(assets);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${make} ${model}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      <form onSubmit={handleAdd} action="">
        <h1>Add Asset</h1>
        <label htmlFor="assetType">Asset Type</label>
        <input
          id=" assetType"
          type="text"
          ref={textInput}
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
          onChange={(e) => setFinacedBy(e.target.value)}
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
