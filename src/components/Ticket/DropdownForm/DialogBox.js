import React from "react";
import { useNavigate } from "react-router-dom";

const DialogBox = ({ onClose, ticketDetails }) => {
  const navigate = useNavigate(); // Initialize the useHistory hook

  const handleViewDetails = () => {
    // Navigate to the ticket detail page with the ticket ID
    navigate(`/ticketview/${ticketDetails.ticketObjId}`);
  };

  const formatDate = (date) => {
    const options = {
      weekday: "short", // Mon
      day: "2-digit", // 21
      month: "short", // Aug
      year: "numeric", // 2023
      hour: "2-digit", // 12
      minute: "2-digit", // 05
      second: "2-digit", // 21
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop w-full">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold mb-2 bg-sky-500  text-white rounded-lg shadow-md p-4 mt-2">
          Ticket Created Successfully !!
        </h2>
        <div className="ml-8 mt-8 flex flex-col justify-start gap-4">
          <p className="flex flex-row justify-start gap-44">
            <span className="text-2xl font-semibold">Ticket ID</span>
            <span className="text-2xl font-semibold -mr-12">:</span>
            <span className="text-2xl font-semibold">
              {ticketDetails.ticketId}
            </span>
          </p>
          <p className="flex flex-row justify-start gap-44">
            <span className="text-2xl font-semibold">Request Type</span>
            <span className="text-2xl font-semibold -mr-12 -ml-12">:</span>
            <span className="text-2xl font-semibold">
              {ticketDetails.requestType}
            </span>
          </p>
          <p className="flex flex-row justify-start gap-16">
            <span className="text-2xl font-semibold">Submission Time</span>
            <span className="text-2xl font-semibold ml-6 -mr-12">:</span>
            <span className="text-2xl font-semibold ml-28">
              {formatDate(ticketDetails.submissionTime)}
            </span>
          </p>
          <div className="flex flex-row justify-between items-center mt-8">
            <button
              className="mt-4 p-2 text-xl bg-gray-500 hover:bg-gray-600 text-white rounded-md cursor-pointer w-1/4"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="mt-4 p-2 text-xl bg-sky-500 hover:bg-sky-600  text-white rounded-md cursor-pointer w-1/4"
              onClick={handleViewDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
