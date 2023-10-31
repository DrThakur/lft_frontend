import { FaMouse } from "react-icons/fa";
import { ImRadioChecked } from "react-icons/im";
import {
  FiBriefcase,
  FiHardDrive,
  FiHome,
  FiMonitor,
  FiSettings,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { MdCable, MdSupportAgent } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";

const menu = [
  {
    title: "Dashboard",
    icon: <FiHome />,
    path: "/dashboard",
  },
  {
    title: "Assets",
    icon: <FiMonitor />,
    childrens: [
      {
        title: "All Assets",
        icon: <ImRadioChecked />,
        path: "/all",
      },
      {
        title: "Monitor",
        icon: <ImRadioChecked />,
        path: "/monitor",
      },
      {
        title: "Desktop",
        icon: <ImRadioChecked />,
        path: "/desktop",
      },
      {
        title: "Laptop",
        icon: <ImRadioChecked />,
        path: "/laptop",
      },
      {
        title: "Tablet",
        icon: <ImRadioChecked />,
        path: "/tablet",
      },
    ],
  },
  {
    title: "Accessories",
    icon: <FaMouse />,
    childrens: [
      {
        title: "All",
        icon: <ImRadioChecked />,
        path: "/all",
      },
      {
        title: "Mouse",
        icon: <ImRadioChecked />,
        path: "/mouse",
      },
      {
        title: "Keyboard",
        icon: <ImRadioChecked />,
        path: "/keyboard",
      },
    ],
  },
  {
    title: "Consumables",
    icon: <MdCable />,
    path: "/consumables",
  },
  {
    title: "Components",
    icon: <FiHardDrive />,
    path: "/components",
  },
  {
    title: "Licences",
    icon: <HiOutlineKey />,
    childrens: [
      {
        title: "All",
        icon: <ImRadioChecked />,
        path: "/all",
      },
      {
        title: "FPGA Software",
        icon: <ImRadioChecked />,
        path: "/softwarepath",
      },
      {
        title: "Hardware Softwares",
        icon: <ImRadioChecked />,
        path: "/softwarepath",
      },
      {
        title: "Applications Software",
        icon: <ImRadioChecked />,
        path: "/softwarepath",
      },
    ],
  },
  {
    title: "IT Support",
    icon: <FiBriefcase />,
    path: "/itsupport",
  },
  {
    title: "Self Support",
    icon: <MdSupportAgent />,
    path: "/selfsupport",
  },
  {
    title: "Admin Rights",
    icon: <FiShield />,
    path: "/admin-rights",
  },
  {
    title: "Users",
    icon: <FiUser />,
    path: "/users",
  },
  {
    title: "Reports",
    icon: <TbReportSearch />,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    path: "/reports",
  },
];

export default menu;
