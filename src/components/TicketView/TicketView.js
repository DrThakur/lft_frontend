import React from "react";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";
import EmployeeEmailOption from "../EmployeeEmailOption/EmployeeEmailOption";
import ReassignEmployee from "../ReassignEmployee/ReassignEmployee";
import TicketThread from "../TicketThread/TicketThread";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import jsPDF from "jspdf";

// const socket = io.connect(apiURL);
const apiURL = process.env.REACT_APP_API_URL

const TicketView = ({ ticketObjId, user }) => {
  const [selectedStatus, setSelectedStatus] = useState("select");
  const [visibleStatusDialog, setVisibleStatusDialog] = useState(false);
  const [visibleDeleteDialog, setVisibleDeleteDialog] = useState(false);
  const [ccRecipients, setCcRecipients] = useState([]);
  const [fixedCcRecipients, setFixedCcRecipients] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [initialMessage, setInitialMessage] = useState("");
  const [ticket, setTicket] = useState({});
  const [ticketCreator, setTicketCreator] = useState({});
  const [employeeEmailOptions, setEmployeeEmailOptions] = useState([]);
  const [technicianOptions, setTechnicianOptions] = useState([]);
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [showCc, setShowCc] = useState(false);
  const [selectedSignature, setSelectedSignature] = useState("");
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [approvedImage, setApprovedImage] = useState(null);
  const [approveButtonDisabled, setApproveButtonDisabled] = useState(false);
  const [members, setMembers] = useState([]);
  const [latestMessage, setLatestMessage] = useState(null);
  const [slas, setSlas] = useState([]);
  const scrollRef = useRef();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate("");

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"], // remove formatting button
  ];

  const module = {
    toolbar: toolbarOptions,
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

  useEffect(() => {
    const fetchEmployeeEmails = async () => {
      try {
        const res = await axios.get(apiURL+"/users");
        // console.log(res);
        const employees = res.data;
        const options = employees.map((employee) => ({
          value: employee.email,
          label: <EmployeeEmailOption employee={employee} />,
        }));
        setEmployeeEmailOptions(options);

        // Set options for filtering based on employee role (only TECHNICIAN)
        const technicianOptions = employees
          .filter((employee) => employee.role === "TECHNICIAN")
          .map((technician) => ({
            value: technician._id, // or some other unique identifier
            label: <ReassignEmployee employee={technician} />,
          }));
        setTechnicianOptions(technicianOptions);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchEmployeeEmails();
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(
          apiURL+`/tickets/${ticketObjId}`
        );
        // console.log("specific ticket data", res.data);
        const memberIds = res.data.members;
        console.log("members", memberIds);

        // Send a POST request to fetch user details by user IDs
        const userDetailsRes = await axios.get(
          apiURL+"/users/usersByIds",
          { params: { userIds: memberIds } } // Pass the memberIds as query parameters
        );

        setMembers(userDetailsRes.data);
        // Extract email addresses from userDetailsRes.data and store in an array
        const userEmails = userDetailsRes.data.map((user) => user.email);
        // console.log("Finally Users emails for fixed CC eciepientg", userEmails);
        setTicket(res.data);
        setFixedCcRecipients(userEmails);

        // Check if the ticket is already approved by manager
        const isApproved = res.data.approvedByManager === "Yes";
        setApproveButtonDisabled(isApproved);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchTickets();
  }, [ticketObjId]);

  useEffect(() => {
    const fetchTicketCreator = async () => {
      try {
        const res = await axios.get(
          apiURL+`/users/${ticket.createdBy._id}`
        );

        setTicketCreator(res.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchTicketCreator();
  }, [ticket.createdBy]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          apiURL+`/messages/${ticketObjId}`
        );

        const latestMessag = response.data[response.data.length - 1];
        setMessages(response.data);
        setLatestMessage(latestMessag);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [ticketObjId]);

  function removeHtmlTags(input) {
    const div = document.createElement("div");
    div.innerHTML = input;
    return div.textContent || div.innerText || "";
  }

  const messageWithoutHTML = removeHtmlTags(message);

  const sendMessage = async () => {
    if (messageWithoutHTML.trim() !== "") {
      const messageData = {
        ticketId: ticketObjId,
        senderId: user._id,
        senderName: user.fullName,
        senderImage: user.profileImageURL,
        text: messageWithoutHTML,
      };

      // send the message to the backend API

      try {
        const response = await axios.post(
          apiURL+`/messages`,
          messageData
        );

        setMessages([...messages, response.data]);
        setLatestMessage(response.data);
        setMessage("");
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };
  const sendMessageOnManualApproval = async () => {
    const messageData = {
      ticketId: ticketObjId,
      senderId: user._id,
      senderName: user.fullName,
      senderImage: user.profileImageURL,
      text: `Approved Manually by ${user.fullName} on ${formatDate(
        Date.now()
      )}`,
    };

    // send the message to the backend API

    try {
      const response = await axios.post(
        apiURL+`/messages`,
        messageData
      );

      setMessages([...messages, response.data]);
      setLatestMessage(response.data);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };
  const sendMessageOnStatusChange = async () => {
    const messageData = {
      ticketId: ticketObjId,
      senderId: user._id,
      senderName: user.fullName,
      senderImage: user.profileImageURL,
      text: `Ticket Staus Changed to ${
        selectedStatus === "select" ? "Closed" : selectedStatus
      } by ${user.fullName} on ${formatDate(Date.now())}`,
    };

    // send the message to the backend API

    try {
      const response = await axios.post(
        apiURL+`/messages`,
        messageData
      );

      setMessages([...messages, response.data]);
      setLatestMessage(response.data);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };
  const sendMessageOnAddingNewMembers = async () => {
    const messageData = {
      ticketId: ticketObjId,
      senderId: user._id,
      senderName: user.fullName,
      senderImage: user.profileImageURL,
      text: `${
        user.fullName
      } had added following new members to the ticket: ${newCcRecipients.filter(
        (person) => person !== ticket?.createdBy?.email
      )} on ${formatDate(Date.now())}`,
    };

    // send the message to the backend API

    try {
      const response = await axios.post(
        apiURL+`/messages`,
        messageData
      );

      setMessages([...messages, response.data]);
      setLatestMessage(response.data);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const socket = io(apiURL); // Replace with your server's URL

    socket.emit("roomConnect", ticketObjId);

    // Handle events here
    socket.on("connect", () => {
      console.log("Connected to the Socket.io server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the Socket.io server");
    });

    socket.on("error", (error) => {
      console.error("Socket.io error:", error);
    });

    // Don't forget to disconnect the socket when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [ticketObjId]);

  let userRole = user.role;
  let fromEmail, toEmail;
  // Set email addresses based on user role
  if (userRole === "ADMINISTRATOR") {
    fromEmail =
      ticket.assignedTo && ticket.assignedTo._id
        ? ticket.assignedTo.email
        : "Not Assigned Yet"; // Email of the assigned technician

    toEmail =
      ticket.createdBy && ticket.createdBy._id
        ? ticket.createdBy.email
        : "Loading...";
  } else if (userRole === "TECHNICIAN") {
    fromEmail =
      ticket.assignedTo && ticket.assignedTo._id
        ? ticket.assignedTo.email
        : "Not Assigned Yet"; // Email of the logged-in technician
    toEmail =
      ticket.createdBy && ticket.createdBy._id
        ? ticket.createdBy.email
        : "Loading...";
  } else if (userRole === "USER") {
    fromEmail =
      ticket.createdBy && ticket.createdBy._id
        ? ticket.createdBy.email
        : "Loading...";
    toEmail =
      ticket.assignedTo && ticket.assignedTo._id
        ? ticket.assignedTo.email
        : "Not Assigned Yet"; // Email of the assigned technician
  }

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setVisibleStatusDialog(true);
  };

  const handleConfirmUpdateStatus = async (forceClosed = false) => {
    try {
      let status = selectedStatus;

      if (forceClosed && selectedStatus === "select") {
        status = "Closed";
      }
      const response = await axios.patch(
        apiURL+`/tickets/${ticketObjId}`,
        { status: status, user: user }
      );
      console.log("my status change response", response.data);
      toast.success(
        `Ticket status changed to ${selectedStatus} successfully!`,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      sendMessageOnStatusChange();
      setSelectedStatus("select");
      setVisibleStatusDialog(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const resetMessage = () => {
    setMessage("");
  };
  const handleCcChange = (selectedOptions) => {
    setCcRecipients(selectedOptions);
  };

  const availableCcOptions = employeeEmailOptions.filter(
    (option) => !fixedCcRecipients.includes(option.value)
  );
  const handleReassign = (selectedOptions) => {
    setEmployeeEmail(selectedOptions);
  };

  const handleMessageChange = (content) => {
    setMessage(content);
    setIsButtonDisabled(removeHtmlTags(content).trim() === "");
  };
  const handleReset = () => {
    setMessage(initialMessage);
  };

  const handleApproveManuallyModal = () => {
    setShowApproveModal(true);
  };

  const closeApproveManuallyModal = () => {
    setShowApproveModal(false);
    setApprovedImage(null); // Reset the uploaded image
  };

  const handleDeleteTicket = async () => {
    try {
      const response = await axios.delete(
        apiURL+`/tickets/${ticketObjId}`
      );
      console.log(response);
      navigate("/all-tickets");
      toast.success(`Ticket ${ticket.ticketId} deleted successfully!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setVisibleDeleteDialog(false);
    } catch (error) {
      console.error("Error Deleting Ticket", error);
    }
  };

  const handleApproveManually = async () => {
    // Once the image is successfully uploaded:
    try {
      const response = await axios.patch(
        apiURL+`/tickets/${ticketObjId}`,
        { approvedByManager: "Yes", approvedBy: user.fullName }
      );
      // Handle the success response, update the state, or show a success message
      console.log("Ticket approved manually:", response.data);
      // Disable the "Approve Manually" button

      setTicket({ ...ticket, approvedByManager: "Yes" });
    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error("Error approving ticket manually:", error);
    }
  };

  const handleAddingCcMembersToTicket = async () => {
    try {
      const newMembersEmails = ccRecipients.map((member) => member.value);

      // Make a POST request to your backend API
      const response = await axios.post(
        apiURL+`/addMembersToTicket`,
        {
          ticketId: ticketObjId,
          newMembers: newMembersEmails,
        }
      );
      // Handle the response from the backend if needed
      console.log("Response from backend", response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error sending cc recipients to the backend:", error);
    }
  };

  // Hnadling deletion oc cc emails/members from frontend and backedn too

  const handleRemoveRecipient = async (recipientEmail) => {
    try {
      // Fetch the memberId based on the recipient's email
      const member = members.find((member) => member.email === recipientEmail);

      if (!member) {
        console.error("Member not found for email:", recipientEmail);
        return;
      }

      console.log("my mber id", member._id);

      const memberId = member._id; // Assuming the id property holds the memberId

      // Remove the email from the fixedCcRecipients in the frontend.
      setFixedCcRecipients((prevRecipients) =>
        prevRecipients.filter((email) => email !== recipientEmail)
      );
      // Make a DELETE request to the backend to remove the email from the ticket members.
      await axios.delete(
        apiURL+`/tickets/${ticketObjId}/members/${memberId}`
      );

      toast.success(
        `Member with email  ${recipientEmail} removed successfully!`,
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    } catch (error) {
      console.error("Error removing recipient:", error);
    }
  };

  const handleCloseTicket = () => {
    console.log("My Close Ticket Button activated");
    handleConfirmUpdateStatus(true);
  };

  // Inside the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      from: fromEmail,
      to: toEmail,
      cc: ccRecipients.map((recipient) => recipient.value),
      message: message,
    };

    try {
      const response = await axios.post(
        apiURL+"/send",
        emailData
      );

      // Handle success or error here
      console.log("triggger Email sent successfully", response.data);

      resetMessage();
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  useEffect(() => {
    const fetchSLA = async () => {
      try {
        const response = await axios.get(apiURL+"/slas");
        setSlas(response.data);
      } catch (error) {
        console.error("Errro", error);
      }
    };
    fetchSLA();
  });

  const findSLAById = (id) => {
    // Use the find method to search for the SLA with the given ID
    const foundSLA = slas.find((sla) => sla._id === id);

    // Return the found SLA or null if not found
    return foundSLA || null;
  };

  const slaObject = findSLAById(ticket?.sla);
  const slaName = slaObject?.name;
  const signatureOptions = [
    { id: "none", name: "None" },
    { id: "mySignature", name: "My Signature", email: "user@example.com" },
    {
      id: "departmentSignature",
      name: "Department Signature (Support)",
      department: "Support",
    },
  ];

  const footerContentStatusChange = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisibleStatusDialog(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={handleConfirmUpdateStatus}
        autoFocus
      />
    </div>
  );

  const footerContentDeleteTicket = (
    <div>
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setVisibleDeleteDialog(false)}
        className="p-button-text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={handleDeleteTicket}
        autoFocus
      />
    </div>
  );

  const newCcRecipients = ccRecipients.map((recipient) => recipient.value);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md w-full">
      <div className="w-full">
        <div className="flex flex-row justify-between items-center bg-sky-100 rounded-l ml-2 mr-2 mt-2 p-2 h-20">
          <h1 className="text-2xl font-bold ml-2 w-1/2">
            Ticket ID: <span className="text-blue-500">{ticket.ticketId}</span>
          </h1>
          {user &&
            (user.role === "ADMINISTRATOR" || user.role === "TECHNICIAN") && (
              <div className="flex flex-row justify-center items-center gap-3 w-1/2">
                <select
                  name="status"
                  id="status"
                  className={`text-white rounded-lg p-3 px-4 h-14 w-1/4 ${
                    ticket?.status === "Closed" ? "bg-gray-300" : "bg-cyan-400"
                  }`}
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  disabled={ticket?.status === "Closed"}
                >
                  <option value="select">Select Status</option>
                  {/* <option value="Open">Open</option> */}
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>

                {/* <Toast ref={toast} />
                <ConfirmDialog /> */}
                <Dialog
                  header="Confirm Status Change"
                  visible={visibleStatusDialog}
                  style={{ width: "20vw" }}
                  onHide={() => setVisibleStatusDialog(false)}
                  footer={footerContentStatusChange}
                >
                  <p className="m-0">Are you sure you want to proceed?</p>
                </Dialog>

                <Select
                  id="email"
                  value={employeeEmail}
                  options={technicianOptions}
                  onChange={handleReassign}
                  placeholder="Reassign"
                  className="w-2/5 h-10 -mt-4 -py-2"
                />

                <button
                  type="button"
                  className="bg-cyan-500 border-none p-3 rounded-lg text-white w-1/4 h-14"
                >
                  PRINT PDF
                </button>
                <button
                  type="button"
                  className="bg-red-500 border-none p-3 rounded-lg text-white w-1/4 h-14"
                  // onClick={handleDeleteTicket}
                  onClick={() => setVisibleDeleteDialog(true)}
                >
                  DELETE TICKET
                </button>
                <Dialog
                  header="Confirm Delete Ticket"
                  visible={visibleDeleteDialog}
                  style={{ width: "20vw" }}
                  onHide={() => setVisibleDeleteDialog(false)}
                  footer={footerContentDeleteTicket}
                >
                  <p className="m-0">Are you sure you want to proceed?</p>
                </Dialog>
              </div>
            )}
        </div>
      </div>
      <div className="sub header flex flex-row justify-between items-center mt-4 bg-white ml-2 mr-2 rounded-lg p-2">
        <div className=" user information section w-1/3 pr-4 ml-2">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left text-xl -mr-4">User:</th>
                <td className="font-semibold text-blue-500 text-xl -ml-4">
                  <Link to={`/userview/${ticket?.createdBy?._id}`}>
                    {ticketCreator.fullName}
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Employee Code:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticketCreator.employeeCode}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Email ID:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticketCreator.email}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Department:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticketCreator.department}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Location:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.location}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Reporting Manager:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticketCreator.reportingManager}
                </td>
              </tr>
              {ticket.projectManagerName && (
                <tr>
                  <th className="text-left text-xl -mr-4">Project Manager:</th>
                  <td className="font-semibold text-blue-500 text-xl">
                    {ticket.projectManagerName}
                  </td>
                </tr>
              )}
              <tr>
                <th className="text-left text-xl -mr-4">Designation:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticketCreator.designation}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Phone Number:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticketCreator.phoneNumber}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Ticket Information Section w-1/3 pr-4 ml-8 -mt-16">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left text-xl -mr-4"> Issue Type:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.requestType}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Created On:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {formatDate(ticket.createdAt)}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">SLA:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {slaName}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Due Date:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.resolutionDueDate
                    ? formatDate(ticket.resolutionDueDate)
                    : "In Process"}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Priority:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.priority}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4"> Last Message:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {formatDate(latestMessage?.createdAt || ticket?.createdAt)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Ticket Status Section w-1/3 pr-4 -mt-16">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left text-xl -mr-4 w-2/5">Status:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.status}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4"> Assigned To:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.assignedTo && ticket.assignedTo._id
                    ? ticket.assignedTo.fullName
                    : "Not Assigned Yet"}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4"> Approved By:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.approvedBy ? ticket.approvedBy : "Not Approved Yet"}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Approved On:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.approvedOn
                    ? formatDate(ticket?.approvedOn)
                    : "In Process"}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Closed By:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.closedBy ? ticket?.closedBy : "Not Closed Yet"}
                </td>
              </tr>
              <tr>
                <th className="text-left text-xl -mr-4">Closed Date:</th>
                <td className="font-semibold text-blue-500 text-xl">
                  {ticket.closedDate
                    ? formatDate(ticket?.closedDate)
                    : "In Process"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="ticket description mt-2 border-2 flex flex-row justify-evenly items-center bg-yellow-100">
        <h1 className="text-2xl font-bold w-1/4 ml-2">Ticket Description :</h1>
        <div className="description box  mt-2 mb-2 p-4 flex flex-grow w-3/4 mr-4 text-lg bg-white rounded-lg -ml-12">
          {ticket.requirementDetails || ticket.issueDescription}
        </div>
      </div>

      {ticket?.requestType === "Request Something" &&
        user._id !== ticket?.createdBy?._id && (
          <div className="manager approval flex flex-row items-center justify-start gap-8 border-2 mt-2 bg-pink-100 rounded-lg mb-2 p-2">
            <h1 className="text-2xl font-bold w-1/4 ml-2">Approve:</h1>
            <button className="bg-yellow-500 rounded-lg p-3 px-8 text-white font-bold text-xl -ml-20">
              {ticket.approvedByManager}
            </button>
            <button
              className={`rounded-lg p-3 px-8 text-white font-bold text-xl ml-4 ${
                approveButtonDisabled ? "bg-gray-300" : "bg-blue-500"
              }`}
              onClick={handleApproveManuallyModal}
              disabled={approveButtonDisabled}
            >
              Approve
            </button>
            {showApproveModal && (
              <div className="modal-container">
                <div className="modal">
                  {/* <h2>Approve Manually</h2> */}
                  <input
                    className="file:text-white file:bg-blue-500 file:text-base file:font-semibold file:py-3 file:px-4 file:rounded-lg file:border-0 file:cursor-pointer"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setApprovedImage(e.target.files[0])}
                  />
                  <button
                    className="bg-green-500 rounded-lg p-3 px-8 text-white font-bold text-xl ml-4"
                    onClick={() => {
                      handleApproveManually();
                      sendMessageOnManualApproval();
                      setShowApproveModal(false);
                      setApproveButtonDisabled(true);
                    }}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-gray-500 rounded-lg p-3 px-8 text-white font-bold text-xl ml-4"
                    onClick={closeApproveManuallyModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      <div className="ticket thread mt-2 bg-cyan-100 rounded-lg shadow-md p-3">
        <h1 className="rounded-lg text-2xl font-bold mb-4 ml-1 mr-1 ">
          Ticket Threads
        </h1>
        {ticketObjId && user && (
          <TicketThread
            user={user}
            ticket={ticket}
            messages={messages}
            members={members}
            formatDate={formatDate}
            scrollRef={scrollRef}
          />
        )}
      </div>
      <div className="w-[98%] mt-4 p-2 bg-green-100 rounded-lg shadow-md ml-4 h-[98%]">
        <h1 className="text-2xl font-bold ml-1 p-2">Post Reply</h1>
        <div className="email-compose mt-4 p-4 border-2 w-3/4 mx-auto bg-white rounded-lg shadow-md mb-2">
          <form className="flex flex-col">
            {/* <label htmlFor="to" className="font-bold mb-1"></label>

            <input
              type="text"
              value={fromEmail}
              // onChange={(e) => setLastName(e.target.value)}
              className="w-full border rounded p-2"
            />
            <label htmlFor="to" className="font-bold mb-1 mt-2"></label>
            <input
              type="text"
              value={toEmail}
              // onChange={(e) => setLastName(e.target.value)}
              className="w-full border rounded p-2"
            /> */}
            {/* Fixed CC recipiemts*/}
            <div className="fixed-cc-recipients  max-w-6xl ml-2 mt-2 w-[98%]">
              <div className="grid grid-cols-3 gap-1">
                {fixedCcRecipients.length - 2 > 0 && (
                  <div className="col-span-3">
                    <span className="font-bold mb-1 mt-2 -ml-1 block w-full">
                      Cc:
                    </span>
                  </div>
                )}
                {fixedCcRecipients.map((recipientEmail) => {
                  if (
                    recipientEmail === ticket.createdBy.email ||
                    recipientEmail === ticket.assignedTo.email
                  ) {
                    return null; // Skip rendering createdBy and assignedTo emails
                  }
                  return (
                    <div
                      key={recipientEmail}
                      className="fixed-cc-recipient bg-gray-300 text-base rounded-full h-8 px-2 py-5 flex flex-row justify-between items-center pl-5"
                    >
                      {recipientEmail}
                      <button
                        type="button"
                        className="delete-button bg-white text-xl w-8 h-8 rounded-full border-none cursor-pointer font-inherit ml-10 font-bold p-0 leading-none flex items-center justify-center"
                        onClick={() => handleRemoveRecipient(recipientEmail)}
                      >
                        &times;
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-2">
              {showCc ? (
                <>
                  <label className="font-bold mb-1">CC:</label>
                  <Select
                    isMulti
                    id="email"
                    value={ccRecipients}
                    options={availableCcOptions}
                    onChange={handleCcChange}
                    placeholder="Select CC"
                    className="w-full"
                  />
                </>
              ) : (
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setShowCc(true)}
                >
                  Add Recipients
                </span>
              )}
            </div>

            <label htmlFor="message" className="font-bold mb-1 mt-2">
              Message:
            </label>
            <ReactQuill
              modules={module}
              value={message}
              theme="snow"
              onChange={handleMessageChange}
              className="border p-2 rounded mb-2"
            />
            {selectedSignature !== "none" && (
              <div className="selected-signature">
                {selectedSignature === "mySignature" && (
                  <div>
                    {user.fullName}
                    <br />
                    {user.email}
                    <br />
                    {user.phone}
                    <br />
                    {user.department}
                  </div>
                )}
                {selectedSignature === "departmentSignature" && (
                  <div>{selectedSignature.department}</div>
                )}
              </div>
            )}

            <div className="signature flex flex-row justify-start items-center gap-28 p-3 mt-2 mb-4">
              <h1 className="text-xl font-bold">Signature</h1>
              <div className="flex flex-row justify-center items-center ml-8 gap-8">
                {signatureOptions.map((signature) => (
                  <div
                    className="flex flex-row justify-center items-center gap-2 text-xl font-semibold"
                    key={signature.id}
                  >
                    <input
                      type="radio"
                      name="signatureOption"
                      id={signature.id}
                      value={signature.id}
                      checked={selectedSignature === signature.id}
                      onChange={() => setSelectedSignature(signature.id)}
                    />
                    <label htmlFor={signature.id}>{signature.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-6">
              <button
                type="submit"
                className={`p-2 rounded w-1/5 ${
                  isButtonDisabled
                    ? "bg-gray-300 text-gray-600"
                    : "bg-green-500 text-white"
                }`}
                disabled={isButtonDisabled}
                onClick={(e) => {
                  handleSubmit(e);
                  sendMessage();
                  resetMessage();
                  setCcRecipients([]);
                  setShowCc(false);
                  handleAddingCcMembersToTicket();
                  setFixedCcRecipients((prevRecipients) => [
                    ...prevRecipients,
                    ...newCcRecipients,
                  ]);
                  sendMessageOnAddingNewMembers();
                  toast.success(`Message sent successfully!`, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }}
              >
                Post Reply
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white p-2 rounded w-1/5"
                onClick={handleReset}
              >
                Reset
              </button>
              {user &&
                (user.role === "ADMINISTRATOR" ||
                  user.role === "TECHNICIAN") && (
                  <button
                    type="button"
                    className={`text-white p-2 rounded w-1/5 ${
                      ticket?.status === "Closed"
                        ? "bg-gray-300"
                        : "bg-green-500"
                    }`}
                    onClick={handleCloseTicket}
                    disabled={ticket?.status === "Closed"}
                  >
                    Close Ticket
                  </button>
                )}
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default TicketView;
