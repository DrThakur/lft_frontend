import React from "react";
import { CChart } from "@coreui/react-chartjs";
import { useState } from "react";

const Pie = () => {
  const [showContent, setShowContent] = useState(true);
  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const chartHeight = showContent ? "41.5vh" : "auto";

  return (
    <div
      className="flex flex-col justify-start items-center rounded-lg pt-5 bg-blue-50 shadow w-full"
      style={{
        width: "20.5vw",
        height: chartHeight,
      }}
    >
      <div className="flex flex-row justify-between items-center mb-2 -mt-2 ">
        <h1 className="text-xl font-bold ml-1">Department Status</h1>
        {/* <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none ml-7"
          onClick={handleToggleContent}
        >
          <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
        </button> */}
      </div>
      {showContent && (
        <div className="h-auto w-[220px] -mt-2">
          <CChart
            type="doughnut"
            data={{
              labels: ["HR", "Finance", "R&D", "IT"],
              datasets: [
                {
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                  data: [40, 20, 80, 10],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    // color: getStyle("--cui-body-color"),
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Pie;
