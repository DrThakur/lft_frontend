import axios from "axios";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InformationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    status: false,
    email: "",
    profileImage: null,
    employeeCode: "",
    designation: "",
    reportingManager: "",
    department: "",
    role: "",
    location: "",
    phoneNumber: "",
    notes: "",
  });

  const handleInputChange = (event) => {
    const { name, type, checked, files } = event.target;
    let newValue;

    if (type === "checkbox") {
      newValue = checked ? "Active" : "Inactive";
    } else if (type === "file") {
      newValue = files[0]; // Store the selected file object
    } else {
      newValue = event.target.value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("My User Creation form Data", formData);
    try {
      const res = await axios.post("http://localhost:8002/users", formData);
      console.log(res);
      // Reset the form after successful submission
      setFormData({
        fullName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        status: false,
        email: "",
        profileImage: null,
        employeeCode: "",
        designation: "",
        reportingManager: "",
        department: "",
        role: "",
        location: "",
        phoneNumber: "",
        notes: "",
      });

      // Show a toast notification
      toast.success("New user created!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen mx-auto p-4 -mt-6 -ml-16">
      <form
        className="w-8/12 mx-auto p-4 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="fullName"
          >
            Full Name:
          </label>
          <input
            className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div> */}

        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex  flex-row items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="active"
          >
            Status:
          </label>
          <input
            className="w-5 h-5 px-4 py-4 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="checkbox"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="employeeCode"
          >
            Employee Code:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="employeeCode"
            value={formData.employeeCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="designation"
          >
            Designation:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="reportingManager"
          >
            Reporting Manager:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="reportingManager"
            value={formData.reportingManager}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="department"
          >
            Department:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="role"
          >
            Role:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          />
        </div> */}
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="role"
          >
            Role:
          </label>
          <select
            className="w-1/2 px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a role</option>
            <option value="ADMINISTRATOR">Administrator</option>
            <option value="TECHNICIAN">Technician</option>
            <option value="USER">User</option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="location"
          >
            Location:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow- -ml-6"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="notes"
          >
            Notes:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <label
            className="w-1/3 text-gray-700 font-bold -mr-8 ml-6"
            htmlFor="profileImage"
          >
            Profile Image:
          </label>
          <input
            className="w-1/2  px-3 py-2 border rounded focus:outline-none focus:shadow-outline -ml-6"
            type="file"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 flex items-center justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline flex justify-evenly"
            type="submit"
          >
            <BsCheckLg className="w-6 h-6" />
            Save
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default InformationForm;
