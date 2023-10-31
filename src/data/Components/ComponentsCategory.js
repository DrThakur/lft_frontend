import { BsBorderAll, BsMotherboard } from "react-icons/bs";
import { FiHardDrive } from "react-icons/fi";
import { HiChip } from "react-icons/hi";

const componentsCategory = [
  { name: "All", count: 100, icon: <BsBorderAll /> },
  {
    name: "Hard Disk",
    count: 10,
    assigned: 5,
    remaining: 5,
    icon: <FiHardDrive />,
  },
  { name: "RAM", count: 20, assigned: 10, remaining: 10, icon: <HiChip /> },
  {
    name: "Motherboard",
    count: 20,
    assigned: 10,
    remaining: 10,
    icon: <BsMotherboard />,
  },

  // Add other categories here
];

export default componentsCategory;
