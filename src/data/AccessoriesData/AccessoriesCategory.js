import { BsBorderAll } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { ImPrinter } from "react-icons/im";
import { MdKeyboard, MdMouse, MdNetworkCell } from "react-icons/md";

const accessoryCategory = [
  { name: "Dashbaord", count: 100, icon: <BsBorderAll /> },
  {
    name: "Misc Info",
    count: 10,
    assigned: 10,
    remaining: 10,
    icon: <MdKeyboard />,
  },
  { name: "Invoicing", count: 20, assigned: 10, remaining: 10, icon: <MdMouse /> },

  {
    name: "Project Expense",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <MdNetworkCell />,
  },

  // {
  //   name: "Memories",
  //   count: 20,
  //   assigned: 10,
  //   remaining: 10,
  //   icon: <ImPrinter />,
  // },
  // {
  //   name: "Hard Drives",
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

export default accessoryCategory;
