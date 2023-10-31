import React from "react";
import ProgressBar from "./ProgressBar";

const RecentTicket = ({ user }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-lg p-4 w-full">
      <h2 className="text-xl font-semibold mb-6">Recent Ticket</h2>
      <ProgressBar
        stages={["Created", "Accepted", "In Process", "Resolved"]}
        currentStage={3}
        user={user}
      />
    </div>
  );
};

export default RecentTicket;
