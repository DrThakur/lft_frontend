import React from "react";

const SystemRights = ({ systemName, systemModel, userRights }) => {
  return (
    <div className="bg-green-200 p-4 rounded-md shadow-md w-full">
      <p className="text-lg font-bold mb-2">System Rights</p>
      <p className="text-sm">
        You have on your system "{systemName}, {systemModel}" has "{userRights}
        ".
      </p>
    </div>
  );
};

export default SystemRights;
