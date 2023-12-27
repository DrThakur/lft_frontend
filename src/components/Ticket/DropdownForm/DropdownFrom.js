import React, { useContext, useEffect, useState } from "react";
// import employees from "../../../data/EmployeesData/EmployeesData";
import EmployeeOption from "./EmployeeOptions";
import Select from "react-select";
import DialogBox from "./DialogBox";
import axios from "axios";
import { Context } from "../../../context/Context";

const DropdownForm = () => {
  const [employeeOptions, setEmployeeOptions] = useState([]);
  const [location, setLocation] = useState("");
  const [requestType, setRequestType] = useState("");
  const [assetRequiredFor, setAssetRequiredFor] = useState("");
  const [requestFor, setRequestFor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [requirementDetails, setRequirementDetails] = useState("");
  const [priority, setPriority] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [projectManagerName, setProjectManagerName] = useState("");
  const [issueType, setIssueType] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    ticketObjId: "",
    ticketId: "",
    requestType: "",
    submissionTime: null,
  });
  const { user, dispatch } = useContext(Context);

  console.log("My Special Context User", user);

  const apiURL = process.env.REACT_APP_API_URL

  const isButtonDisabled =
    !location ||
    (location && !requestType) ||
    (!requestFor && requestType === "Request Something") ||
    (requestFor && !quantity) ||
    (quantity && !requirementDetails) ||
    (requirementDetails && !user.reportingManager) ||
    (user.reportingManager && !priority) ||
    (requestFor === "Project" && !projectName) ||
    (projectName && !projectDuration) ||
    (projectDuration && !projectManagerName) ||
    (projectManagerName && !priority) ||
    (requestType === "Report Something" && !issueType) ||
    (issueType && !issueDescription) ||
    (issueDescription && !priority);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    //
    setRequestType("");
    setAssetRequiredFor("");
    setRequestFor("");
    setQuantity("");
    setRequirementDetails("");
    setProjectName("");
    setProjectDuration("");
    setProjectManagerName("");
    setIssueType("");
    setRequirementDetails("");
    setPriority("");

    // form complete
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleRequestTypeChange = (e) => {
    const selectedRequestType = e.target.value;
    setRequestType(selectedRequestType);

    if (selectedRequestType !== "Request Something") {
      setAssetRequiredFor("");
      setRequestFor("");
      setQuantity("");
      setRequirementDetails("");
      setProjectName("");
      setProjectDuration("");
      setProjectManagerName("");
      setPriority("");
    } else {
      setIssueType("");
      setRequirementDetails("");
      setPriority("");
    }

    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleassetRequiredForChange = (e) => {
    //setting the value of asset required
    setAssetRequiredFor(e.target.value);
    //resetting the values of feild coming below asset required for
    setRequestFor("");
    setQuantity("");
    setRequirementDetails("");
    setProjectName("");
    setProjectDuration("");
    setProjectManagerName("");
    setPriority("");

    // setting form submission and form complete to false as form is still left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleAssetSelect = (asset) => {
    //setting the feild of request for on value change
    setRequestFor(asset);

    // restting the value of fielfs coming below request for
    setQuantity("");
    setRequirementDetails("");
    setProjectName("");
    setProjectDuration("");
    setProjectManagerName("");
    setPriority("");

    // setting the form completed and form submission function to false as stillfew fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleQuantityChange = (event) => {
    //setting the feild of request for on value change
    setQuantity(event.target.value);

    // restting the value of fielfs coming below request for
    setRequirementDetails("");
    setProjectName("");
    setProjectDuration("");
    setProjectManagerName("");
    setPriority("");

    // setting the form completed and form submission function to false as stillfew fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handlerequirementDetailsChange = (e) => {
    // setting the form field requirement details to selected or filled value on change
    setRequirementDetails(e.target.value);

    // resetting the form fields coming below to requirement details on its change in value
    setProjectName("");
    setProjectDuration("");
    setProjectManagerName("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleProjectNameChange = (e) => {
    // setting the form field requirement details to selected or filled value on change
    setProjectName(e.target.value);

    // resetting the form fields coming below to requirement details on its change in value

    setProjectDuration("");
    setProjectManagerName("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleProjectDurationChange = (e) => {
    // setting the form field requirement details to selected or filled value on change
    setProjectDuration(e.target.value);

    // resetting the form fields coming below to requirement details on its change in value
    setProjectManagerName("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  // const handleManagerApprovalChange = (value) => {
  //   // setting the value of field manager approval to selected value or filled value

  //   // resetting the value of fields coming below manager approval field as on change of manager approval they might be needed to be changed
  //   setProjectManagerName("");
  //   setPriority("");

  //   // setting form completed and form submitted function to false as still few fields are left to be filled
  //   setIsFormSubmitted(false);
  //   setIsFormComplete(false);
  // };

  const handleProjectManagerNameChange = (selectedOption) => {
    // setting the value of manager name field on value passed , given or selected or filled in form
    setProjectManagerName(selectedOption.value);

    // restting the values of field coming below manager name as manager name changes happen
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleIssueChange = (issue) => {
    // setting the of issue related to field base on selected or filled value
    setIssueType(issue);
    // resetting the form fields coming below issue related to field as value of issue related to field changes
    setIssueDescription("");
    setPriority("");

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setPriority("");
    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handleissueDescriptionChange = (e) => {
    //setting issue description to its values based on filled value in the form
    setIssueDescription(e.target.value);

    // restting the form fields coming below issue description to set is based on changes in issue description
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };

  const handlePriorityChange = (priority) => {
    // setting the value of priority field on value passed , given or selected or filled in form
    setPriority(priority);

    // setting form completed and form submitted function to false as still few fields are left to be filled
    setIsFormSubmitted(false);
    setIsFormComplete(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    let isComplete = true;

    if (!location) {
      isComplete = false;
    }
    if (requestType === "Request Something") {
      if (
        !assetRequiredFor ||
        !requestFor ||
        !quantity ||
        !requirementDetails
      ) {
        isComplete = false;
      }
      if (user.reportingManager && !priority) {
        isComplete = false;
      }
      // if (!priority) {
      //   isComplete = false;
      // }
    } else if (requestType === "Report Something") {
      if (!issueType || !issueDescription || !priority) {
        isComplete = false;
      }
    } else {
      isComplete = false;
    }

    //form Data creation
    const formData = {
      location,
      requestType,
      priority,
    };

    if (requestType === "Request Something") {
      if (assetRequiredFor === "Self") {
        formData.assetRequiredFor = assetRequiredFor;
        formData.requestFor = requestFor;
        formData.quantity = quantity;
        formData.requirementDetails = requirementDetails;
        formData.reportingManager = user.reportingManager;
      } else if (assetRequiredFor === "Project") {
        formData.assetRequiredFor = assetRequiredFor;
        formData.requestFor = requestFor;
        formData.requirementDetails = requirementDetails;
        formData.projectName = projectName;
        formData.projectDuration = projectDuration;
        formData.projectManagerName = projectManagerName;
      }
    } else if (requestType === "Report Something") {
      formData.issueType = issueType;
      formData.issueDescription = issueDescription;
    }

    if (isComplete) {
      setIsFormSubmitted(true);
      console.log("My Latest forma Dtaa", formData);
      formData.userId = user._id;
      formData.fullName = user.fullName;
      formData.email = user.email;
      formData.employeeCode = user.employeeCode;
      formData.profileImageURL = user.profileImageURL;

      // Making Post request usin axios for form submission
      try {
        const response = await axios.post(
          apiURL+"/tickets",
          formData
        );

        console.log("My Ticket Details cinal", response.data);
        // Simulate a backend response
        const TicketId = response.data.id;
        const TicketObjId = response.data._id;
        const submissionDetails = {
          ticketObjId: `${TicketObjId}`,
          ticketId: `${TicketId}`,
          requestType: `${requestType}/${
            requestType === "Request Something" ? assetRequiredFor : ""
          }/${requestType === "Report Something" ? issueType : requestFor}`,
          submissionTime: new Date(),
        };
        setTicketDetails(submissionDetails);
        setShowDialog(true);

        // Create a conversation using the ticket ID and user ID
        const conversationData = {
          ticketId: TicketObjId,
          senderId: user._id, // Assuming this is the user's ID
        };

        // Make a POST request to create a conversation
        const conversationResponse = await axios.post(
          apiURL+"/conversations",
          conversationData
        );
        console.log("conversation response", conversationResponse);

        const conversationId = conversationResponse.data._id; // Adjust the key based on your response structure

        // Create the first message
        const firstMessageData = {
          conversationId: conversationId,
          sender: user._id, // Assuming this is the user's ID
          text: requirementDetails || issueDescription,
        };

        // Make a POST request to create the first message
        const firstMessageResponse = await axios.post(
          apiURL+"/messages",
          firstMessageData
        );
        console.log("My first Ever Message", firstMessageResponse);
      } catch (error) {
        // Handle error here
        console.error("Error submitting form:", error);
      }
    } else {
      setIsFormComplete(true);
    }

    // Resetting the form fields
    setLocation("");
    setRequestType("");
    setAssetRequiredFor("");
    setRequestFor("");
    setQuantity("");
    setRequirementDetails("");
    setProjectName("");
    setProjectDuration("");
    setProjectManagerName("");
    setIsFormSubmitted(false);
    setIsFormComplete(false);
    setIssueType("");
    setIssueDescription("");
    setPriority("");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(apiURL+"/users");
        console.log(res);
        // setTickets(res.data);
        console.log(res.data);
        const employees = res.data;
        const options = employees.map((employee) => ({
          value: employee.fullName,
          label: <EmployeeOption employee={employee} />,
        }));
        setEmployeeOptions(options);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchUsers();
  }, []);

  // const isFormIncomplete =
  //   !requestType ||
  //   (requestType === "Request Something" &&
  //     (!assetRequiredFor ||
  //       !requestFor ||
  //       !requirementDetails ||
  //       (approvedByManager && !projectManagerName))) ||
  //   (requestType === "Report Something" && (!issueType || !issueDescription)) ||
  //   !priority;
  console.log("Reporting Manager of User", user.reportingManager);

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 px-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-evenly items-center mb-4">
          <label htmlFor="location" className="w-full mb-2 font-medium">
            Location
          </label>
          <select
            id="location"
            name="location"
            value={location}
            onChange={handleLocationChange}
            className="w-full border rounded-md p-2"
          >
            <option value="">-- Select Location --</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {location && (
          <div className="flex flex-row justify-center items-center mb-4">
            <label htmlFor="requestType" className="w-full mb-2 font-medium">
              Request Type:
            </label>
            <select
              id="requestType"
              value={requestType}
              onChange={handleRequestTypeChange}
              className="w-full border rounded-md p-2 cursor-pointer"
            >
              <option value="">-- Select Request Type --</option>
              <option value="Request Something">Request Something</option>
              <option value="Report Something">Report Something</option>
            </select>
          </div>
        )}

        {requestType && (
          <div
            className={`p-2 rounded-lg shadow-md text-center mx-auto mb-2 ${
              requestType === "Request Something"
                ? "bg-pink-500"
                : "bg-yellow-500"
            }`}
          >
            <p className="text-lg text-center font-semibold text-white">
              {requestType.toUpperCase()}
            </p>
          </div>
        )}

        {requestType === "Request Something" ? (
          <>
            <div className=" flex flex-row justify-between items-center mb-4">
              <label className="w-auto mb-2 font-medium">
                Asset required for:
              </label>
              <div className="flex flex-row justify-between items-center mx-auto">
                <label
                  htmlFor="assetRequiredForSelf"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="assetRequiredForSelf"
                    name="assetRequiredFor"
                    value="Self"
                    checked={assetRequiredFor === "Self"}
                    onChange={handleassetRequiredForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Self
                </label>
                <label
                  htmlFor="assetRequiredForProject"
                  className="inline-flex items-center mr-2"
                >
                  <input
                    type="radio"
                    id="assetRequiredForProject"
                    name="assetRequiredFor"
                    value="Project"
                    checked={assetRequiredFor === "Project"}
                    onChange={handleassetRequiredForChange}
                    className="cursor-pointer mr-2"
                    required
                  />
                  Project
                </label>
              </div>
            </div>

            {assetRequiredFor && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label htmlFor="requestFor" className="w-full mb-2 font-medium">
                  Request For:
                </label>
                <select
                  id="requestFor"
                  name="requestFor"
                  value={requestFor}
                  onChange={(e) => handleAssetSelect(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Asset --</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Desktop">Desktop</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Consumables">Consumables</option>
                  <option value="Consumables">Licence</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            )}

            {requestFor && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="requirementDetails"
                  className="w-full mb-2 font-medium"
                >
                  Specify Quantity :
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="Specify Quanity in Numbers"
                  className="w-full text-left border border-gray-300 rounded-md p-2 px-3 focus:outline-none focus:border-blue-500"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
            )}

            {quantity && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="requirementDetails"
                  className="w-full mb-2 font-medium"
                >
                  {requestFor === "Laptop" || requestFor === "Desktop"
                    ? "Please Give Your System Configuration"
                    : "Brief your requirement"}
                  :
                </label>
                <textarea
                  id="requirementDetails"
                  name="requirementDetails"
                  value={requirementDetails}
                  onChange={handlerequirementDetailsChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}

            {assetRequiredFor === "Self" &&
              requestFor &&
              requirementDetails && (
                <div className="flex flex-row justify-between items-center mb-4 mt-4">
                  <label
                    htmlFor="reportingprojectManagerName"
                    className="w-1/4 mb-2 font-medium"
                  >
                    Reporting Manager :
                  </label>
                  <h1 className="w-2/4 text-lg text-center text-white font-bold py-2 -px-2 border-2 border-blue-400 rounded-lg  bg-blue-400 -ml-2">
                    {user.reportingManager}
                  </h1>
                </div>
              )}

            {requirementDetails && assetRequiredFor === "Project" && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label
                  htmlFor="projectName"
                  className="w-full mb-2 font-medium"
                >
                  Project Name :
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  placeholder="Enter project name"
                  className="w-full text-left border border-gray-300 rounded-md p-2 px-3 focus:outline-none focus:border-blue-500"
                  value={projectName}
                  onChange={handleProjectNameChange}
                />
              </div>
            )}
            {requirementDetails &&
              assetRequiredFor === "Project" &&
              projectName && (
                <div className="flex flex-row justify-evenly items-center mb-4">
                  <label
                    htmlFor="projectDuration"
                    className="w-full mb-2 font-medium"
                  >
                    Project Duration :
                  </label>
                  <input
                    type="text"
                    id="projectDuration"
                    name="projectDuration"
                    placeholder="Enter Project Duration"
                    className="w-full text-left border border-gray-300 rounded-md p-2 px-3 focus:outline-none focus:border-blue-500"
                    value={projectDuration}
                    onChange={handleProjectDurationChange}
                  />
                </div>
              )}

            {/* {requirementDetails && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label className="w- mb-2 font-medium">
                  Approved By Manager:
                </label>
                <div className="flex flex-row justify-between items-center mx-auto">
                  <label
                    htmlFor="managerApprovalYes"
                    className="inline-flex items-center mr-2"
                  >
                    <input
                      type="radio"
                      id="managerApprovalYes"
                      name="approvedByManager"
                      value="Yes"
                      checked={approvedByManager}
                      // onChange={handleManagerApprovalChange}
                      onChange={() => handleManagerApprovalChange("Yes")}
                      className="cursor-pointer mr-2"
                    />
                    Yes
                  </label>
                  <label
                    htmlFor="managerApprovalNo"
                    className="inline-flex items-center mr-2"
                  >
                    <input
                      type="radio"
                      id="managerApprovalNo"
                      name="approvedByManager"
                      value="No"
                      checked={!approvedByManager}
                      // onChange={handleManagerApprovalChange}
                      onChange={() => handleManagerApprovalChange("No")}
                      className="cursor-pointer mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            )} */}

            {requirementDetails &&
              assetRequiredFor === "Project" &&
              projectName &&
              projectDuration && (
                <div className="flex flex-row justify-between items-center mb-4">
                  <label
                    htmlFor="projectManagerName"
                    className="w-full mb-2 font-medium"
                  >
                    Project Manager's Name:
                  </label>
                  <Select
                    id="projectManagerName"
                    value={{
                      value: projectManagerName,
                      label: projectManagerName,
                    }}
                    onChange={handleProjectManagerNameChange}
                    options={employeeOptions}
                    className="w-full border rounded-md mt-2 -ml-2"
                  />
                </div>
              )}
            {(assetRequiredFor === "Self" &&
              requestFor &&
              requirementDetails &&
              user.reportingManager) ||
            (assetRequiredFor === "Project" &&
              projectName &&
              projectDuration &&
              projectManagerName) ? (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label htmlFor="priority" className="w-full mb-2 font-medium">
                  Set Priority:
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Priority --</option>
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>
            ) : null}
          </>
        ) : (
          <>
            {location && requestType === "Report Something" && (
              <div className="flex flex-row justify-evenly items-center mb-4">
                <label htmlFor="requestFor" className="w-full mb-2 font-medium">
                  Issue Related To:
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  value={issueType}
                  onChange={(e) => handleIssueChange(e.target.value)}
                  className="w-full border rounded-md p-2"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="Software Related">Software Related</option>
                  <option value="Network Related">Network Related</option>
                  <option value="LFT Resource Related">
                    LFT Resource Realted
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
            )}
            {issueType === "LFT Resource Related" && (
              <div>
                <p className="text-sm text-right mb-2 -mt-2">
                  (For Mantis, SVN, Crush FTP, FTP Access Related etc...)
                </p>
              </div>
            )}
            {requestType === "Report Something" && issueType && (
              <div className="flex flex-row justify-center items-center mb-4">
                <label
                  htmlFor="requirementDetails"
                  className="w-full mb-2 font-medium"
                >
                  Brief your requirement:
                </label>
                <textarea
                  id="issueDescription"
                  name="issueDescription"
                  value={issueDescription}
                  onChange={handleissueDescriptionChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}
            {requestType === "Report Something" &&
              issueType &&
              issueDescription && (
                <div className="flex flex-row justify-evenly items-center mb-4">
                  <label htmlFor="priority" className="w-full mb-2 font-medium">
                    Set Priority(report):
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={priority}
                    onChange={(e) => handlePriorityChange(e.target.value)}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">-- Select Issue --</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>
                </div>
              )}
          </>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isButtonDisabled}
            onClick={handleSubmit}
            className={`mt-4 p-2 rounded-md cursor-pointer ${
              isButtonDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white"
            }`}
          >
            Submit
          </button>
        </div>

        {isFormComplete && (
          <p className="text-red-500 mt-2">
            Please fill in all the required fields.
          </p>
        )}

        {isFormSubmitted && (
          <p className="text-green-500 mt-2">Form submitted successfully!</p>
        )}
        {showDialog && (
          <DialogBox
            ticketDetails={ticketDetails}
            onClose={() => setShowDialog(false)}
          />
        )}
      </form>
    </div>
  );
};

export default DropdownForm;
