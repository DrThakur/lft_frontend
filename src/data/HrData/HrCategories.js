import { BsBorderAll } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { ImPrinter } from "react-icons/im";
import { MdKeyboard, MdMouse, MdNetworkCell } from "react-icons/md";

const HrCategory = [
  { name: "Total Employees", count: 100, icon: <BsBorderAll /> },
  { name: "Present Employees", count: 100, icon: <BsBorderAll /> },
  { name: "Absent Employees", count: 100, icon: <BsBorderAll /> },
  {
    name: "Employee Record",
    count: 10,
    assigned: 10,
    remaining: 10,
    icon: <MdKeyboard />,
  },
  { name: "Hiring", count: 20, assigned: 10, remaining: 10, icon: <MdMouse /> },

  {
    name: "Appraisals",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <MdNetworkCell />,
  },

  {
    name: "Event Calender",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <ImPrinter />,
  },
  {
    name: "Report Generation",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <MdNetworkCell />,
  },
  // {
  //   name: "Power Adapters",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <MdNetworkCell />,
  // },
  // {
  //   name: "Power Adapters",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <FaPowerOff />,
  // },
  // Add other categories here
];

export default HrCategory;
