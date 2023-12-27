import React, { useState, useEffect, useRef, useContext } from "react";
import { FiSun, FiMoon, FiBell, FiBellOff } from "react-icons/fi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { FaUser, FaCog, FaLock, FaSignOutAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
// import logo2 from "../../Images/IT_HeLPDESK-blue-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const Header = ({
  name,
  logout,
  toggleSidebar,
  toggleNotificationMenu,
  isSideOpen,
  isNotificationClicked,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const dropdownRef = useRef(null);
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  console.log("My Normal User", user);
  const apiURL = process.env.REACT_APP_API_URL

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Implement dark mode logic here
  };

  const handleTriangleToggle = () => {
    setIsOpen(!isOpen);
    // Implement triangle toggle logic here
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="px-8 py-6 bg-sky-500 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full bg-black text-white"
          onClick={toggleSidebar}
        >
          <span>
            {isSideOpen ? (
              <RxHamburgerMenu className="ease-in-out duration-300" />
            ) : (
              <RxHamburgerMenu className="rotate-90 delay-400 ease-in-out duration-300" />
            )}
          </span>
        </button>
        <h3 className="text-lg">
          <span className="font-semibold text-white">Welcome </span>
          <span className="text-white font-semibold">{user.fullName}</span>
        </h3>
      </div>
      <div className="text-center ml-24">
        {/* <img src={logo2} alt="Logo" className="h-28 w-28 cursor-pointer" /> */}
      </div>
      <div className="flex items-center space-x-6 ml-2">
        <button
          className="p-2 rounded-full bg-white text-gray-600"
          onClick={handleDarkModeToggle}
        >
          {darkMode ? (
            <FiSun className="text-2xl" />
          ) : (
            <FiMoon className="text-2xl" />
          )}
        </button>
        <button
          className="p-2 rounded-full bg-white text-gray-600"
          onClick={toggleNotificationMenu}
        >
          {isNotificationClicked ? (
            <FiBell className="text-2xl" />
          ) : (
            <FiBellOff className="text-2xl" />
          )}
          {notificationCount > 0 && (
            <span className="bg-red-500 text-white absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-xs mr-24 mt-5">
              {notificationCount}
            </span>
          )}
        </button>
        <div className="relative flex items-center">
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-10 right-0 mt-6 -mr-6 bg-white border border-gray-300 rounded shadow-md z-20 w-48"
            >
              {/* Triangle menu content */}
              <ul className="space-y-2 p-2">
                <li className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
                  <Link
                    to="/userProfilePage"
                    className="flex flex-row justify-center items-center"
                  >
                    <FaUser className="mr-2" />
                    Profile
                  </Link>
                </li>
                <li className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
                  <Link
                    to="/settings"
                    className="flex flex-row justify-center items-center"
                  >
                    <FaCog className="mr-2" />
                    Settings
                  </Link>
                </li>
                <li className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer">
                  <Link
                    to="/userProfilePage"
                    className="flex flex-row justify-center items-center"
                  >
                    <FaLock className="mr-2" />
                    Change Password
                  </Link>
                </li>
                <li
                  className="flex items-center hover:text-blue-500 hover:bg-gray-200 p-2 rounded cursor-pointer"
                  onClick={handleLogOut}
                >
                  <Link
                    to="/userProfilePage"
                    className="flex flex-row justify-center items-center"
                  >
                    <FaSignOutAlt className="mr-2" />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-2">
              <img
                src={apiURL+`${user.profileImageURL}`}
                alt="Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <div className="absolute flex items-center justify-center right-0 bottom-0 transform translate-x-6 -translate-y-1/2 cursor-pointer">
                {isOpen ? (
                  <GoTriangleDown
                    className="text-black text-xl"
                    onClick={handleTriangleToggle}
                  />
                ) : (
                  <GoTriangleUp
                    className="text-black text-xl"
                    onClick={handleTriangleToggle}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
