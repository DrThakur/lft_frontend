import { BsBorderAll, BsLaptop } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { FaDesktop, FaPowerOff, FaTabletAlt } from "react-icons/fa";
import { MdKeyboard, MdNetworkCell } from "react-icons/md";
import { CgSoftwareDownload } from "react-icons/cg";
import { ImPrinter } from "react-icons/im";

const assetCategory = [
  { name: "My Open Tickets", count: 100, icon: <BsBorderAll /> },
  {
    name: "Pending Timesheets",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <BsLaptop />,
  },
  {
    name: "Pending Actions",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <FaDesktop />,
  },
  // {
  //   name: "Tablets",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <FaTabletAlt />,
  // },
  // {
  //   name: "Monitors",
  //   count: 10,
  //   assigned: 5,
  //   remaining: 5,
  //   icon: <FiMonitor />,
  // },

  // {
  //   name: "Printers",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <ImPrinter />,
  // },
  // {
  //   name: "Firewalls",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <ImPrinter />,
  // },
  // {
  //   name: "PDUs",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <FaPowerOff />,
  // },
  // {
  //   name: "Access Points",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <FaPowerOff />,
  // },
  // {
  //   name: "Switches",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <FaPowerOff />,
  // },

  // {
  //   name: "Accessories",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <MdKeyboard />,
  // },
  // {
  //   name: "Data Card",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <MdNetworkCell />,
  // },
  // { name: "Applications", count: 20, icon: <CgSoftwareDownload /> },
  // Add other categories here
];

export default assetCategory;
