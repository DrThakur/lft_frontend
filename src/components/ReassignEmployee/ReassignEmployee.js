import React from "react";

const ReassignEmployee = ({ employee }) => (
  <div className="flex items-center">
    <img
      src={`http://localhost:8002${employee.profileImageURL}`}
      alt={`${employee.fullName}'s profile`}
      className="w-10 h-10 rounded-full mr-2"
    />
    <div>
      <p className="font-medium">{employee.fullName}</p>
      <p className="text-sm text-gray-700">
        {employee.role} ({employee.employeeCode})
      </p>
    </div>
  </div>
);

export default ReassignEmployee;