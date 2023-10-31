import React, { useState } from "react";

const TabbedForm = () => {
  const [activeTab, setActiveTab] = useState("request");
  const [needForSelf, setNeedForSelf] = useState(false);
  const [needForProject, setNeedForProject] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState("");
  const [description, setDescription] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNeedForSelfChange = () => {
    setNeedForSelf(true);
    setNeedForProject(false);
    setSelectedAsset("");
    setDescription("");
    setIsFormSubmitted(false);
  };

  const handleNeedForProjectChange = () => {
    setNeedForSelf(false);
    setNeedForProject(true);
    setSelectedAsset("");
    setDescription("");
    setIsFormSubmitted(false);
  };

  const handleAssetSelect = (asset) => {
    setSelectedAsset(asset);
    setDescription("");
    setIsFormSubmitted(false);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setIsFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can access the selected values: needForSelf, needForProject, selectedAsset, description
    // For simplicity, let's just log the values to the console
    console.log("Form submitted:");
    console.log("Need for self:", needForSelf);
    console.log("Need for project:", needForProject);
    console.log("Selected asset:", selectedAsset);
    console.log("Description:", description);

    setIsFormSubmitted(true);
  };

  return (
    <div className="w-full">
      <div className="flex space-x-4">
        <div
          className={`p-4 cursor-pointer rounded-lg ${
            activeTab === "request" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("request")}
        >
          Request Something
        </div>
        <div
          className={`p-4 cursor-pointer rounded-lg ${
            activeTab === "report" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("report")}
        >
          Report Something
        </div>
      </div>

      {activeTab === "request" && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex space-x-4">
            <div>
              <label htmlFor="needForSelf">
                <input
                  type="radio"
                  id="needForSelf"
                  name="need"
                  checked={needForSelf}
                  onChange={handleNeedForSelfChange}
                  className="mr-2"
                />
                Need asset for self?
              </label>
            </div>
            <div>
              <label htmlFor="needForProject">
                <input
                  type="radio"
                  id="needForProject"
                  name="need"
                  checked={needForProject}
                  onChange={handleNeedForProjectChange}
                  className="mr-2"
                />
                Need asset for project?
              </label>
            </div>
          </div>
          {needForSelf || needForProject ? (
            <div className="mt-4">
              <div className="flex space-x-4">
                <div>
                  <button
                    className={`p-2 cursor-pointer rounded-lg ${
                      selectedAsset === "Laptop"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleAssetSelect("Laptop")}
                  >
                    Laptop
                  </button>
                </div>
                <div>
                  <button
                    className={`p-2 cursor-pointer rounded-lg ${
                      selectedAsset === "Desktop"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleAssetSelect("Desktop")}
                  >
                    Desktop
                  </button>
                </div>
                <div>
                  <button
                    className={`p-2 cursor-pointer rounded-lg ${
                      selectedAsset === "Accessories"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleAssetSelect("Accessories")}
                  >
                    Accessories
                  </button>
                </div>
                <div>
                  <button
                    className={`p-2 cursor-pointer rounded-lg ${
                      selectedAsset === "Component"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleAssetSelect("Component")}
                  >
                    Component
                  </button>
                </div>
                <div>
                  <button
                    className={`p-2 cursor-pointer rounded-lg ${
                      selectedAsset === "Other"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleAssetSelect("Other")}
                  >
                    Other
                  </button>
                </div>
              </div>

              {selectedAsset && (
                <div className="mt-4">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    rows={4}
                    className="w-full border rounded-md p-2"
                  />
                </div>
              )}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={!selectedAsset || description === ""}
            className="mt-4 p-2 bg-green-500 text-white rounded-md cursor-pointer"
          >
            Submit
          </button>
          {isFormSubmitted && (
            <p className="text-green-500 mt-2">Form submitted successfully!</p>
          )}
        </form>
      )}

      {activeTab === "report" && (
        <form className="mt-4">
          <p>Report form goes here...</p>
        </form>
      )}
    </div>
  );
};

export default TabbedForm;
