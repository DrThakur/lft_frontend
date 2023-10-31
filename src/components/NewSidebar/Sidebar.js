import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import menu from "../../data/SidebarData/SidebarData";
import SidebarItem from "../Sidebar/SidebarItems";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex layout">
      <div className={`sidebar ${isOpen ? "w-64" : "w-16"}`}>
        <div className="top_section bg-dark-blue">
          <div className={`logo ${isOpen ? "block" : "hidden"}`}>
            <RiProductHuntLine
              size={35}
              className="cursor-pointer text-white"
              onClick={goHome}
            />
          </div>

          <div className={`bars ml-${isOpen ? "16" : "0"}`}>
            <HiMenuAlt3 onClick={toggle} className="text-white" />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        className={`main ${
          isOpen ? "pl-64" : "pl-16"
        } transition-all duration-500`}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
