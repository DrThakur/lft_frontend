import axios from "axios";
import React, { useEffect, useState } from "react";

const ProgressBar = ({ user }) => {
  console.log("Pogress Bar Useer", user.reportingManager);
  const [userLatestTicket, setUserLatestTicket] = useState(null);
  // const formatDate = (date) => {
  //   const options = { day: "2-digit", month: "short", year: "numeric" };
  //   const formattedDate = new Date(date).toLocaleDateString("en-US", options);

  //   // Split the formatted date into day, month, and year parts
  //   const [month, day, year] = formattedDate.split(" ");

  //   // Convert the month abbreviation to uppercase
  //   const capitalizedMonth = month.toUpperCase();

  //   // Return the formatted date with uppercase month abbreviation and desired format
  //   return `${day} ${capitalizedMonth} ${year}`;
  // };

  const apiURL = process.env.REACT_APP_API_URL

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

  useEffect(() => {
    const fetchLatestTicket = async () => {
      try {
        const res = await axios.get(
          apiURL+`/ticketByUserId?userId=${user._id}`
        );
        const latestTicket = res.data[res.data.length - 1]; // Assuming the latest ticket is the first one
        console.log("My Latest Ticket Data", latestTicket);
        setUserLatestTicket(latestTicket); // Update the latest ticket in your state
      } catch (error) {
        console.error("Error fetching latest ticket", error);
      }
    };

    fetchLatestTicket();
  }, [user._id]);
  console.log("USer Latest Ticket", userLatestTicket);

  console.log(
    "userLatestTicket.assignedTo:",
    userLatestTicket?.assignedTo?._id
  );
  return (
    <ol className="flex items-center justify-between relative text-gray-500 border-t border-gray-200 dark:border-gray-700 dark:text-gray-400 ml-4">
      {userLatestTicket ? (
        <>
          <li className="mb-10">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-medium leading-tight mt-6 mb-2">
              Ticket Created #{userLatestTicket.ticketId}
            </h3>
            <p className="text-sm">{formatDate(userLatestTicket.createdAt)}</p>
            <p className="text-sm mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
              Click to view details
            </p>
          </li>
          <li className="mb-10">
            {userLatestTicket?.assignedTo &&
            userLatestTicket?.assignedTo?._id !== null ? (
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            ) : (
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            )}

            <h3 className="font-medium leading-tight mt-10 mb-2">
              Ticket Assigned
            </h3>
            <p className="text-sm">{formatDate(userLatestTicket.updatedAt)}</p>
            <p className="text-sm">
              {userLatestTicket?.assignedTo?._id !== null
                ? `Owner: ${userLatestTicket.assignedTo?.fullName}`
                : "Not Yet Assigned"}
            </p>
            <p className="text-sm mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
              Click to view details
            </p>
          </li>
          <li className="mb-10">
            {(userLatestTicket?.assignedTo?._id !== null &&
              userLatestTicket.status === "New") ||
            userLatestTicket.status === "Open" ||
            userLatestTicket.status === "Pending" ||
            userLatestTicket.status === "Resolved" ||
            userLatestTicket.status === "Closed" ? (
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            ) : (
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            )}

            <h3 className="font-medium leading-tight -mt-2 mb-1">
              In Progress
            </h3>
            <p className="text-sm mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
              Click to view details
            </p>
          </li>
          <li>
            {userLatestTicket.status === "Resolved" ||
            userLatestTicket.status === "Closed" ? (
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            ) : (
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -top-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            )}

            <h3 className="font-medium leading-tight -mt-12 mb-1">Resolved</h3>
            <p className="text-sm mt-2 text-blue-400 hover:text-blue-600 cursor-pointer">
              Click to view details
            </p>
          </li>
        </>
      ) : (
        // Render a placeholder or loading state while fetching data
        <li>No New Ticekts...</li>
      )}
    </ol>
  );
};

export default ProgressBar;
