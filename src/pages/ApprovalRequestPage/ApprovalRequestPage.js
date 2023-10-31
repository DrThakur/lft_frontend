import React from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router-dom
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

const ApprovalRequestPage = () => {
  const { ticketId } = useParams();

  const handleApproval = () => {
    // Logic for handling approval
    // You can make an API call to update the ticket status
  };

  const handleRejection = () => {
    // Logic for handling rejection
    // You can make an API call to update the ticket status
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full h-1/2">
        <h2 className="text-xl font-semibold mb-4">Ticket Approval Request</h2>
        <p className="mb-4">
          Request for Ticket #{ticketId}. <br />
          Please review the details below and take action.
        </p>
        {/* Render ticket details here */}
        <p>User: Ankit Kumar Thakur</p>
        <p>email: akankit114@gmail.com</p>
        <p>Designation: Software Enginerr</p>
        <p>Department: IT Supporr</p>
        <p>Reporting Manager: Sachin Sharma</p>
        <p>RequestFor: Self</p>
        <p>Asset Required: Laptop</p>
        <p>Requirement Details: "laptopp Required for new joinee"</p>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleApproval}
            className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            <BsCheckCircle className="mr-2" />
            Approve
          </button>
          <button
            onClick={handleRejection}
            className="flex items-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            <BsXCircle className="mr-2" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalRequestPage;
