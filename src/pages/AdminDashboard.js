// import React, { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const categories = [
//   { name: "Monitor", count: 10 },
//   { name: "Laptop", count: 20 },
//   { name: "Desktop", count: 15 },
//   { name: "Tablets", count: 5 },
//   { name: "Accessories", count: 30 },
//   { name: "Data Card", count: 8 },
//   { name: "Software Licences", count: 12 },
//   { name: "Printers", count: 6 },
//   { name: "PDUs", count: 3 },
// ];

// const AdminDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       <div
//         className={`w-1/4 bg-gray-800 text-gray-100 transition-all duration-300 ${
//           isSidebarOpen ? "block" : "hidden"
//         }`}
//       >
//         {/* Sidebar */}
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
//         </div>
//         <nav className="p-2">
//           <ul>
//             <li className="p-2 hover:bg-gray-700">Dashboard</li>
//             <li className="p-2 hover:bg-gray-700">Users</li>
//             <li className="p-2 hover:bg-gray-700">Products</li>
//             <li className="p-2 hover:bg-gray-700">Orders</li>
//           </ul>
//         </nav>
//       </div>
//       <div
//         className={`${
//           isSidebarOpen ? "w-3/4" : "w-full"
//         } bg-gray-200 transition-all duration-300`}
//       >
//         {/* Main Content */}
//         <div className="p-4">
//           <button
//             className="text-gray-500 hover:text-gray-700"
//             onClick={toggleSidebar}
//           >
//             {isSidebarOpen ? (
//               <FiChevronLeft size={20} />
//             ) : (
//               <FiChevronRight size={20} />
//             )}
//           </button>
//           <h2 className="text-2xl font-semibold">Dashboard</h2>
//         </div>
//         <div className="flex">
//           <div className="w-3/4 p-4">
//             <div className="grid grid-cols-2 gap-4">
//               {categories.map((category, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center"
//                 >
//                   <h3 className="text-base font-semibold">{category.name}</h3>
//                   <p className="text-gray-500 mt-1">{category.count} items</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-1/4 bg-gray-100 p-4">
//             <h3 className="text-xl font-semibold mb-4">Actions</h3>
//             <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-2">
//               View Tickets
//             </button>
//             <button className="w-full bg-green-500 text-white py-2 rounded-md mb-2">
//               Create New Ticket
//             </button>
//             <button className="w-full bg-yellow-500 text-white py-2 rounded-md mb-2">
//               Admin Right Access
//             </button>
//             <button className="w-full bg-red-500 text-white py-2 rounded-md">
//               Admin Right Revoke
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const categories = [
  { name: "Monitor", count: 10 },
  { name: "Laptop", count: 20 },
  { name: "Desktop", count: 20 },
  { name: "Tablet", count: 20 },
  { name: "Accessories", count: 20 },
  { name: "Data Card", count: 20 },
  { name: "Applications", count: 20 },
  { name: "Printers", count: 20 },
  { name: "PDUs", count: 20 },
  // Add other categories here
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Generate dummy list of monitors
  const generateMonitorList = () => {
    const monitors = [];
    for (let i = 1; i <= selectedCategory.count; i++) {
      monitors.push({
        id: i,
        assetType: "Monitor",
        // Add other details for each monitor
      });
    }
    return monitors;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-1/4 bg-gray-800 text-gray-100 transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        </div>
        <nav className="p-2 min-h-screen">
          <ul>
            <li className="p-2 hover:bg-gray-700">
              <MdDashboard /> Dashboard
            </li>
            <li className="p-2 hover:bg-gray-700">Assets</li>
            <li className="p-2 hover:bg-gray-700">Accessories</li>
            <li className="p-2 hover:bg-gray-700">Applications</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`${
          isSidebarOpen ? "w-3/4" : "w-full"
        } bg-gray-200 transition-all duration-300`}
      >
        <div className="p-4">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <FiChevronLeft size={20} />
            ) : (
              <FiChevronRight size={20} />
            )}
          </button>
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        <div className="flex">
          <div className="w-3/4 p-4">
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`bg-white p-2 rounded-lg shadow-md flex flex-col justify-center items-center ${
                    selectedCategory.name === category.name
                      ? "bg-blue-200"
                      : "bg-white"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <h3 className="text-base font-semibold">{category.name}</h3>
                  <p className="text-gray-500 mt-1">{category.count} items</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              {selectedCategory.name === "Monitor" && (
                <div>
                  <h2 className="text-lg font-semibold mb-2">Monitors</h2>
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b">Asset Type</th>
                        <th className="py-2 px-4 border-b">Financed By</th>
                        <th className="py-2 px-4 border-b">Procured Under</th>
                        <th className="py-2 px-4 border-b">Location</th>
                        {/* <th className="py-2 px-4 border-b">System</th>
                        <th className="py-2 px-4 border-b">Asset Code</th>
                        <th className="py-2 px-4 border-b">Service Tag No.</th>
                        <th className="py-2 px-4 border-b">Make</th>
                        <th className="py-2 px-4 border-b">Model</th>
                        <th className="py-2 px-4 border-b">CPU</th>
                        <th className="py-2 px-4 border-b">CPU Generation</th>
                        <th className="py-2 px-4 border-b">CPU Version</th>
                        <th className="py-2 px-4 border-b">CPU Speed</th>
                        <th className="py-2 px-4 border-b">RAM</th>
                        <th className="py-2 px-4 border-b">Hard Disk</th>
                        <th className="py-2 px-4 border-b">Hard Disk Type</th>
                        <th className="py-2 px-4 border-b">Issued To</th>
                        <th className="py-2 px-4 border-b">
                          Owner/ Project Name
                        </th> */}
                        <th className="py-2 px-4 border-b">Username</th>
                        {/* Add other table headers */}
                      </tr>
                    </thead>
                    <tbody>
                      {generateMonitorList().map((monitor) => (
                        <tr key={monitor.id}>
                          <td className="py-2 px-4 border-b">
                            {monitor.assetType}
                          </td>
                          <td className="py-2 px-4 border-b">...</td>
                          <td className="py-2 px-4 border-b">...</td>
                          <td className="py-2 px-4 border-b">...</td>
                          {/* Add other table data */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-2">
                    Total Count: {selectedCategory.count} items
                  </p>
                </div>
              )}
              {/* Add rendering logic for other categories */}
            </div>
          </div>
          <div className="w-1/4 bg-gray-100 p-4">
            <h3 className="text-xl font-semibold mb-4">Actions</h3>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-2">
              View Tickets
            </button>
            <button className="w-full bg-green-500 text-white py-2 rounded-md mb-2">
              Create New Ticket
            </button>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-md mb-2">
              Pending Tickets
            </button>
            <button className="w-full bg-red-500 text-white py-2 rounded-md">
              Closed Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

// import React, { useState } from "react";
// import {
//   FiMenu,
//   FiBell,
//   FiMoon,
//   FiSun,
//   FiUser,
//   FiHome,
//   FiUsers,
//   FiSettings,
// } from "react-icons/fi";
// import { Link, useLocation } from "react-router-dom";

// const SidebarItem = ({ icon, text, path }) => {
//   const location = useLocation();
//   const isActive = location.pathname === path;

//   return (
//     <li className={`p-4 hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}>
//       <Link to={path} className="flex items-center">
//         <span className="mr-2">{icon}</span>
//         <span>{text}</span>
//       </Link>
//     </li>
//   );
// };

// const Sidebar = () => {
//   return (
//     <div className="bg-gray-800 text-gray-100 flex flex-col w-64 items-center">
//       {/* Sidebar Header */}
//       <div className="p-4 flex items-center">
//         <h2 className="text-2xl font-semibold">Dashboard</h2>
//       </div>

//       {/* Sidebar Links */}
//       <nav className="flex-1">
//         <ul className="space-y-2">
//           <SidebarItem icon={<FiHome />} text="Assets" path="/assets" />
//           <SidebarItem icon={<FiUsers />} text="Users" path="/users" />
//           <SidebarItem icon={<FiSettings />} text="Settings" path="/settings" />
//         </ul>
//       </nav>
//     </div>
//   );
// };

// const DashboardHeader = ({ isSidebarOpen, toggleSidebar }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="bg-gray-200 p-4 flex justify-between items-center">
//       {/* Sidebar Toggle Button */}
//       <button
//         className="text-gray-500 hover:text-gray-700"
//         onClick={toggleSidebar}
//       >
//         <FiMenu size={20} />
//       </button>

//       {/* Notification Icon */}
//       <FiBell size={20} className="text-gray-500 hover:text-gray-700" />

//       {/* Dark/Light Mode Toggle */}
//       <button className="text-gray-500 hover:text-gray-700">
//         <FiMoon size={20} />
//       </button>

//       {/* User Dropdown */}
//       <div className="relative inline-block">
//         <button
//           className="text-gray-500 hover:text-gray-700"
//           onClick={handleDropdownToggle}
//         >
//           <FiUser size={20} />
//         </button>
//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded shadow">
//             <ul>
//               <li className="p-2 hover:bg-gray-200">Profile</li>
//               <li className="p-2 hover:bg-gray-200">Settings</li>
//               <li className="p-2 hover:bg-gray-200">Logout</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       {isSidebarOpen && <Sidebar />}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-gray-100">
//         <DashboardHeader
//           isSidebarOpen={isSidebarOpen}
//           toggleSidebar={toggleSidebar}
//         />

//         {/* Content Section */}
//         <div className="p-4 flex-1">
//           {/* Bunch of Tabs */}
//           <div className="flex space-x-2 mb-4">
//             <div className="bg-white p-2 rounded-lg shadow-md">
//               <span>All</span>
//             </div>
//             <div className="bg-white p-2 rounded-lg shadow-md">
//               <span>Monitor</span>
//             </div>
//             <div className="bg-white p-2 rounded-lg shadow-md">
//               <span>Laptop</span>
//             </div>
//             <div className="bg-white p-2 rounded-lg shadow-md">
//               <span>Desktop</span>
//             </div>
//             <div className="bg-white p-2 rounded-lg shadow-md">
//               <span>Software</span>
//             </div>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex space-x-2">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
//               Create New Ticket
//             </button>
//             <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">
//               Pending Tickets
//             </button>
//             <button className="bg-green-500 text-white py-2 px-4 rounded-md">
//               View All Tickets
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
