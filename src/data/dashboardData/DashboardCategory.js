import { FaLaptopCode } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";
import { MdCable, MdKeyboard } from "react-icons/md";
import { FiHardDrive } from "react-icons/fi";
import { BsFillPeopleFill, BsTicketPerforated } from "react-icons/bs";

const DashboardCategory = [
  {
    name: "Employee Corner",
    count: 0,
    assigned: 0,
    remaining: 0,
    icon: <FaLaptopCode />,
  },
  {
    name: "Project Management",
    count: 0,
    assigned: 13,
    remaining: 7,
    icon: <MdKeyboard />,
  },
  {
    name: "IT Operations",
    count: 0,
    assigned: 0,
    remaining: 0,
    icon: <MdCable />,
  },
  {
    name: "Admin Operations",
    count: 0,
    assigned: 0,
    remaining: 0,
    icon: <FiHardDrive />,
  },
  {
    name: "HR Operations",
    count: 15,
    assigned: 0,
    remaining: 15,
    icon: <BsTicketPerforated />,
  },
  {
    name: "Finance Operations",
    count: 0,
    icon: <CgSoftwareDownload />,
  },
  {
    name: "S&M Operations",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Procurement Operations",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "R&D Operations",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Management",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Helpdesk",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Document Center",
    count: 250,
    icon: <BsFillPeopleFill />,
  },
];

export default DashboardCategory;
