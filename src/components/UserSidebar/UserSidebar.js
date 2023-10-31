import React, { useState } from "react";
import logo from "../../Images/LFT-Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiMonitor,
  FiBriefcase,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { ImRadioChecked } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const UserSidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (label) => {
    setActiveItem(label === activeItem ? null : label);
    if (label === "Dashboard") {
      navigate("/");
    } else if (label === "My Assets") {
      navigate("/my-assets");
    } else if (label === "My Accessories") {
      navigate("/my-accessories");
    } else if (label === "IT Support") {
      navigate("/my-tickets");
    } else if (label === "Self Support") {
      navigate("/self-support");
    } else if (label === "System Rights") {
      navigate("/system-right");
    } else if (label === "Settings") {
      navigate("/settings");
    }
  };

  return (
    <div className=" w-72 flex-none flex flex-col h-screen  bg-yellow-300 text-white rounded-lg overflow-scroll overflow-y-hidden overflow-x-hidden">
      <div className="top-0  flex items-center justify-center h-28">
        <img src={logo} alt="Logo" className="h-32 w-32 cursor-pointer" />
      </div>
      <div className="relative flex flex-col flex-grow ">
        <NavItem
          icon={<FiHome />}
          label="Dashboard"
          active={activeItem === "Dashboard"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiMonitor />}
          label="My Assets"
          active={activeItem === "My Assets"}
          onItemClick={handleItemClick}
        />
        {/* <div className="flex flex-col">
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-assets" className="text-white">
                All
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-assets" className="text-white">
                Monitor
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-assets" className="text-white">
                Desktop
              </Link>
            </div>
          </div>
        </NavItem> */}
        <NavItem
          icon={<FaMouse />}
          label="My Accessories"
          active={activeItem === "My Accessories"}
          onItemClick={handleItemClick}
        />
        {/* <div className="flex flex-col ">
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-accessories" className="text-white">
                All
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-accessories" className="text-white">
                Keyboard
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-white hover:bg-opacity-20 hover:text-white hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-accessories" className="text-white">
                Mouse
              </Link>
            </div>
          </div>
        </NavItem> */}
        <NavItem
          icon={<FiBriefcase />}
          label="IT Support"
          active={activeItem === "IT Support"}
          onItemClick={handleItemClick}
        >
          <div className="flex flex-col">
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/user/new-ticket" className="text-black">
                Create New Ticket
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-tickets" className="text-black">
                My Tickets
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-pending-tickets" className="text-black">
                Pending Tickets
              </Link>
            </div>
            <div className="flex items-center mb-4 px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-closed-tickets" className="text-black">
                Closed Tickets
              </Link>
            </div>
            <div className="flex items-center px-4 py-1 hover:bg-black hover:bg-opacity-20 hover:text-black hover:rounded-lg cursor-pointer hover:mr-10 hover:px-4 hover:py-1">
              <ImRadioChecked className="mr-2" />
              <Link to="/my-all-tickets" className="text-black">
                All Tickets
              </Link>
            </div>
          </div>
        </NavItem>
        <NavItem
          icon={<MdSupportAgent />}
          label="Self Support"
          active={activeItem === "Self Support"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiShield />}
          label="System Rights"
          active={activeItem === "System Rights"}
          onItemClick={handleItemClick}
        />
        <NavItem
          icon={<FiSettings className="animate-[spin_3s_linear_infinite]" />}
          label="Settings"
          active={activeItem === "Settings"}
          onItemClick={handleItemClick}
        />

        <div className="mt-auto mb-4 text-sm text-black text-center">
          Version: 1.0.0
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active, onItemClick, children }) => {
  const hasSubMenu = !!children;
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  const handleItemClick = () => {
    if (hasSubMenu) {
      setExpandSubMenu(!expandSubMenu);
    } else {
      onItemClick(label);
      setExpandSubMenu(false);
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-start py-2 pl-6 cursor-pointer ${
          active
            ? "bg-cyan-400 rounded-lg"
            : "hover:bg-black hover:bg-opacity-20 hover:text-white hover:rounded-lg"
        } backdrop-filter backdrop-blur-lg ml-2 mr-6 mb-2`}
        onClick={handleItemClick}
      >
        <span
          className={`text-2xl mr-4 ${active ? "text-white" : "text-black"}`}
        >
          {icon}
        </span>
        <span
          className={`text-xl font-semibold font-montserrat ml-4 ${
            active ? "text-white" : "text-black"
          }`}
        >
          {label}
        </span>
        {hasSubMenu && (
          <span className="ml-auto text-black font-bold text-xl">
            {expandSubMenu ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </span>
        )}
      </div>
      {expandSubMenu && hasSubMenu && (
        <div
          className={`relative left-10 top-0 bg-yellow-300 text-black py-2 px-4 rounded-lg mt-1 text-base font-semibold ml-4`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default UserSidebar;
