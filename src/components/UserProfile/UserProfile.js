import React, { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import axios from "axios";

const UserProfile = ({ user }) => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [username, setUsername] = useState("johndoe");
  const [gender, setGender] = useState("Male");
  const [birthday, setBirthday] = useState("1990-01-01");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useRef(null);

  const handleSave = () => {
    // Perform save logic here
    setIsEditMode(false);
  };

  const onUpload = async (event) => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("user", JSON.stringify(user)); // Append user data
    console.log("My Profile formadata", formData);
    try {
      const response = await axios.post(
        "http://localhost:8002/users/uploadProfileImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Handle successful upload, maybe refresh user data
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Profile Image and User Data Updated",
        });
      } else {
        // Handle upload error
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Failed to update profile image and user data",
        });
      }
    } catch (error) {
      // Handle network error
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Network error while updating profile image and user data",
      });
    }
  };

  console.log("User Profile user", user);

  return (
    <div className="flex p-8 w-full">
      <div className="w-4/12 pr-8 bg-white rounded shadow text-center">
        <div className="flrx flex-col justify-cemter items-center mb-4 mt-6">
          <img
            src={`http://localhost:8002${user.profileImageURL}`}
            alt="User Profile"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <div className="card flex justify-content-center ml-44">
            <Toast ref={toast}></Toast>
            <FileUpload
              mode="basic"
              name="file"
              accept="image/*"
              chooseLabel="Change Profile"
              maxFileSize={1000000}
              customUpload={true}
              uploadHandler={(event) => {
                setSelectedFile(event.files[0]);
                onUpload();
              }}
            />
          </div>
        </div>
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">{`${user.fullName}`}</p>
          <p className="text-gray-500">{user.employeeCode}</p>
          <p className="text-gray-500">{user.designation}</p>
        </div>
        <div className="border-t border-gray-300">
          <ul className="mt-4 space-y-2">
            <li>
              <button
                className="w-44 bg-gray-200 text-blue-500 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Personal Information")}
              >
                Personal Information
              </button>
            </li>
            <li>
              <button
                className="w-44 bg-gray-200 text-blue-500 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Change Password")}
              >
                Change Password
              </button>
            </li>
            <li>
              <button
                className="w-44 bg-gray-200 text-blue-500 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Theme Settings")}
              >
                Theme Settings
              </button>
            </li>
            <li>
              <button
                className="w-44 text-blue-500 bg-gray-200 shadow-md rounded-lg p-2  hover:bg-blue-500 hover:text-white"
                onClick={() => console.log("Navigate to Settings")}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-8/12 ml-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                value={user.fullName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                value={user.lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Designation</label>
              <input
                type="text"
                value={user.designation}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Gender</label>
              <select
                value={user.gender || "Male"}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Birthday</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                value={user.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
            <div className="mt-2">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-2"
                disabled={!isEditMode}
              />
            </div>
          </div>
          <div className="mt-4">
            {isEditMode ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditMode(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
