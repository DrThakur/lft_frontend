import React from "react";

const SlaSettings = () => {
  return (
    <div>
      <h1 className="font-bold text-lg mb-4">SLA Settings</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <form
          id="sla-form"
          className=" flex flex-col justify-center items-center gap-2"
        >
          <div className="w-full flex flex-row justify-evenly items-center gap-6">
            <label for="sla-name" className="ml-4">
              SLA Name:
            </label>
            <input
              type="text"
              id="sla-name"
              placeholder=" Enter SLA Name"
              className="w-full border rounded-md p-3"
              required
            />
          </div>

          <div className="w-full flex flex-row justify-between items-center gap-6">
            <label for="response-time">Response Time (in hours):</label>
            <input
              type="number"
              id="response-time"
              className=" w-full border rounded-md p-3"
              placeholder=" Enter Response Time"
              required
            />
          </div>
          <div className=" w-full flex flex-row justify-between items-center gap-6">
            <label for="resolution-time">Resolution Time (in hours):</label>
            <input
              type="number"
              id="resolution-time"
              className=" w-full border rounded-md p-3"
              placeholder=" Enter Resolution Time"
              required
            />
          </div>

          <button
            type="button"
            onclick="createSLA()"
            className=" bg-green-600 text-white p-4 rounded-lg shadow-md"
          >
            Create SLA
          </button>
        </form>
      </div>
    </div>
  );
};

export default SlaSettings;
