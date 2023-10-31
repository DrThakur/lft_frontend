// import React, { useState } from "react";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState(["Laptop", "Desktop"]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <select
//             value={selectedOption}
//             onChange={handleSelectChange}
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//           >
//             {dropdownOptions.map((option, index) => (
//               <option key={index} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <input
//             type="text"
//             value={newOption}
//             onChange={handleInputChange}
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//           />
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([
//     "Option 1",
//     "Option 2",
//   ]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="Select an option"
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([
//     "Option 1",
//     "Option 2",
//   ]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     const option = prompt("Enter a new option:");
//     if (option) {
//       setDropdownOptions([...dropdownOptions, option]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="Select an option"
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([
//     "Option 1",
//     "Option 2",
//   ]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//     setIsModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="Select an option"
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//         </div>
//         {/* <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button> */}

//         {/* Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md mb-4"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([
//     "Option 1",
//     "Option 2",
//   ]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//     setIsModalOpen(false);
//   };

//   const handleDeleteOption = (option) => {
//     const updatedOptions = dropdownOptions.filter((item) => item !== option);
//     setDropdownOptions(updatedOptions);
//     if (selectedOption === option) {
//       setSelectedOption("");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="Select an option"
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button>

//         {/* Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md mb-4"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Dropdown options */}
//         <div className="mt-4">
//           {dropdownOptions.map((option, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-2 bg-gray-100 rounded-md p-2"
//             >
//               <span>{option}</span>
//               <RiCloseCircleLine
//                 className="text-red-500 cursor-pointer"
//                 onClick={() => handleDeleteOption(option)}
//               />
//             </div>
//           ))}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([
//     "Option 1",
//     "Option 2",
//   ]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//     setIsModalOpen(false);
//   };

//   const handleDeleteOption = () => {
//     setIsDeleteModalOpen(true);
//   };

//   const handleDeleteModalClose = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleOptionDelete = (option) => {
//     const updatedOptions = dropdownOptions.filter((item) => item !== option);
//     setDropdownOptions(updatedOptions);
//     setSelectedOption("");
//     setIsDeleteModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder="Select an option"
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//           <button
//             type="button"
//             onClick={handleDeleteOption}
//             className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
//           >
//             Delete Option
//           </button>
//         </div>
//         {/* <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button> */}

//         {/* Add Option Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md mb-4"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Option Modal */}
//         {isDeleteModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Delete Option</h2>
//               {dropdownOptions.map((option, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between mb-2"
//                 >
//                   <span>{option}</span>
//                   <RiCloseCircleLine
//                     className="text-red-500 cursor-pointer"
//                     onClick={() => handleOptionDelete(option)}
//                   />
//                 </div>
//               ))}
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleDeleteModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//     setIsModalOpen(false);
//   };

//   const handleDeleteOption = () => {
//     if (dropdownOptions.length === 0) {
//       setIsDeleteModalOpen(false);
//     } else {
//       setIsDeleteModalOpen(true);
//     }
//   };

//   const handleDeleteModalClose = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleOptionDelete = (option) => {
//     const updatedOptions = dropdownOptions.filter((item) => item !== option);
//     setDropdownOptions(updatedOptions);
//     setSelectedOption("");
//     setIsDeleteModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder={
//                 dropdownOptions.length === 0
//                   ? "Please Add Options"
//                   : "Select an option"
//               }
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//           <button
//             type="button"
//             onClick={handleDeleteOption}
//             className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
//           >
//             Delete Option
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button>

//         {/* Add Option Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md mb-4"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Option Modal */}
//         {isDeleteModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Delete Option</h2>
//               {dropdownOptions.length === 0 ? (
//                 <p>No Options available for deletion</p>
//               ) : (
//                 <>
//                   {dropdownOptions.map((option, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between mb-2"
//                     >
//                       <span>{option}</span>
//                       <RiCloseCircleLine
//                         className="text-red-500 cursor-pointer"
//                         onClick={() => handleOptionDelete(option)}
//                       />
//                     </div>
//                   ))}
//                   <div className="flex justify-end">
//                     <button
//                       type="button"
//                       onClick={handleDeleteModalClose}
//                       className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//     setIsModalOpen(false);
//   };

//   const handleDeleteOption = () => {
//     setIsDeleteModalOpen(true);
//   };

//   const handleDeleteModalClose = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleOptionDelete = (option) => {
//     const updatedOptions = dropdownOptions.filter((item) => item !== option);
//     setDropdownOptions(updatedOptions);
//     setSelectedOption("");
//     setIsDeleteModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder={
//                 dropdownOptions.length === 0
//                   ? "Please Add Options"
//                   : "Select an option"
//               }
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//           <button
//             type="button"
//             onClick={handleDeleteOption}
//             className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
//           >
//             Delete Option
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button>

//         {/* Add Option Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md mb-4"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Option Modal */}
//         {isDeleteModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Delete Option</h2>
//               {dropdownOptions.length === 0 ? (
//                 <p>No Options available for deletion</p>
//               ) : (
//                 <>
//                   {dropdownOptions.map((option, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between mb-2"
//                     >
//                       <span>{option}</span>
//                       <RiCloseCircleLine
//                         className="text-red-500 cursor-pointer"
//                         onClick={() => handleOptionDelete(option)}
//                       />
//                     </div>
//                   ))}
//                   <div className="flex justify-end">
//                     <button
//                       type="button"
//                       onClick={handleDeleteModalClose}
//                       className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

// import React, { useState } from "react";
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const DropdownForm = () => {
//   const [dropdownOptions, setDropdownOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isNoOptionsModalOpen, setIsNoOptionsModalOpen] = useState(false);

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewOption(e.target.value);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     if (newOption !== "") {
//       setDropdownOptions([...dropdownOptions, newOption]);
//       setNewOption("");
//     }
//     setIsModalOpen(false);
//   };

//   const handleDeleteOption = () => {
//     if (dropdownOptions.length === 0) {
//       setIsNoOptionsModalOpen(true);
//     } else {
//       setIsDeleteModalOpen(true);
//     }
//   };

//   const handleDeleteModalClose = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleOptionDelete = (option) => {
//     const updatedOptions = dropdownOptions.filter((item) => item !== option);
//     setDropdownOptions(updatedOptions);
//     setSelectedOption("");
//     setIsDeleteModalOpen(false);
//   };

//   const handleNoOptionsModalClose = () => {
//     setIsNoOptionsModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex space-x-4">
//           <label htmlFor="asset-type" className="text-lg font-semibold">
//             Asset Type:
//           </label>
//           <div className="relative inline-flex">
//             <input
//               type="text"
//               id="asset-type"
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-2 pl-6 pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder={
//                 dropdownOptions.length === 0
//                   ? "Please Add Options"
//                   : "Select an option"
//               }
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 right-2 text-gray-500" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Add Option
//           </button>
//           <button
//             type="button"
//             onClick={handleDeleteOption}
//             className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
//           >
//             Delete Option
//           </button>
//         </div>
//         {/* <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button> */}

//         {/* Add Option Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md mb-4"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Option Modal */}
//         {isDeleteModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">Delete Option</h2>
//               {dropdownOptions.map((option, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between mb-2"
//                 >
//                   <span>{option}</span>
//                   <RiCloseCircleLine
//                     className="text-red-500 cursor-pointer"
//                     onClick={() => handleOptionDelete(option)}
//                   />
//                 </div>
//               ))}
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleDeleteModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* No Options Modal */}
//         {isNoOptionsModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-lg font-semibold mb-4">
//                 No Options available for deletion
//               </h2>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleNoOptionsModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

//Final Code before dynamic rendering
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

// const DropdownForm = ({ id, name, value, onChange, fixedOptions }) => {
//   const [dropdownOptions, setDropdownOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [newOption, setNewOption] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [isNoOptionsModalOpen, setIsNoOptionsModalOpen] = useState(false);
//   const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
//   const [optionToDelete, setOptionToDelete] = useState("");

//   useEffect(() => {
//     // Load options from local storage if available
//     const storedOptions = JSON.parse(localStorage.getItem(name));

//     if (storedOptions) {
//       setDropdownOptions(storedOptions);
//     }
//   }, [name]);

//   const handleSelectChange = (e) => {
//     const option = e.target.value;
//     setSelectedOption(option);
//     setNewOption("");
//   };

//   const handleInputChange = (e) => {
//     const newValue = e.target.value;
//     setNewOption(newValue);
//     onChange(newValue);
//   };

//   const handleAddOption = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalSave = () => {
//     // if (newOption !== "") {
//     //   setDropdownOptions([...dropdownOptions, newOption]);
//     //   setNewOption("");
//     // }
//     // setIsModalOpen(false);
//     if (newOption !== "") {
//       const updatedOptions = [...dropdownOptions, newOption];
//       setDropdownOptions(updatedOptions);
//       setNewOption("");

//       // Store the updated options in local storage
//       localStorage.setItem(name, JSON.stringify(updatedOptions));
//     }
//     setIsModalOpen(false);
//   };

//   const handleDeleteOption = () => {
//     if (dropdownOptions.length === 0) {
//       setIsNoOptionsModalOpen(true);
//     } else {
//       setIsDeleteModalOpen(true);
//     }
//   };

//   const handleDeleteModalClose = () => {
//     setIsDeleteModalOpen(false);
//     setOptionToDelete("");
//   };

//   const handleOptionDelete = (option) => {
//     setOptionToDelete(option);
//     setIsConfirmationModalOpen(true);
//   };

//   const handleConfirmationModalClose = () => {
//     setIsConfirmationModalOpen(false);
//     setOptionToDelete("");
//   };

//   const handleConfirmationModalYes = () => {
//     const updatedOptions = dropdownOptions.filter(
//       (item) => item !== optionToDelete
//     );
//     setDropdownOptions(updatedOptions);
//     setSelectedOption("");
//     setIsDeleteModalOpen(false);
//     setIsConfirmationModalOpen(false);
//     setOptionToDelete("");
//   };

//   const handleNoOptionsModalClose = () => {
//     setIsNoOptionsModalOpen(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can access the selectedOption value for further processing
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="relative flex items-center space-x-4">
//           <label htmlFor={id} className="text-xs font-semibold w-32">
//             {name}:
//           </label>
//           {/* <div className="relative inline-flex text-sm">
//             <input
//               type="text"
//               id={id}
//               value={selectedOption}
//               onChange={handleInputChange}
//               className="p-1 pl-6 text-xs pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               placeholder={
//                 dropdownOptions.length === 0
//                   ? "Please Add Options"
//                   : "Select an option"
//               }
//               readOnly
//             />
//             <RiArrowDropDownLine className="absolute top-2 font-bold text-sm right-2 text-gray-700" />
//             <select
//               value={selectedOption}
//               onChange={handleSelectChange}
//               className="absolute w-full h-full opacity-0 cursor-pointer"
//             >
//               {dropdownOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="button"
//             onClick={handleAddOption}
//             className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xs"
//           >
//             +
//           </button>
//           <button
//             type="button"
//             onClick={handleDeleteOption}
//             className="px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
//           >
//             -
//           </button> */}
//           {fixedOptions ? (
//             <div className="relative inline-flex text-sm">
//               <input
//                 type="text"
//                 id={id}
//                 value={selectedOption}
//                 onChange={handleInputChange}
//                 className="p-1 pl-6 text-xs pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                 placeholder="-- Select an option --"
//                 readOnly
//               />
//               <RiArrowDropDownLine className="absolute top-2 font-bold text-sm right-2 text-gray-700" />
//               <select
//                 value={selectedOption}
//                 onChange={handleSelectChange}
//                 className="absolute w-full h-full opacity-0 cursor-pointer"
//               >
//                 {fixedOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           ) : (
//             <div className="relative inline-flex text-sm">
//               <select
//                 id={id}
//                 value={selectedOption}
//                 onChange={handleSelectChange}
//                 className="p-1 pl-6 text-xs pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//               >
//                 <option value="">-- Select an option --</option>
//                 {dropdownOptions.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//               {/* <RiArrowDropDownLine className="absolute top-2 font-bold text-sm right-2 text-gray-700" /> */}
//             </div>
//           )}
//           {!fixedOptions && (
//             <>
//               <button
//                 type="button"
//                 onClick={handleAddOption}
//                 className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xs"
//               >
//                 +
//               </button>
//               <button
//                 type="button"
//                 onClick={handleDeleteOption}
//                 className="px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
//               >
//                 -
//               </button>
//             </>
//           )}
//         </div>
//         {/* <button
//           type="submit"
//           className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//         >
//           Save
//         </button> */}

//         {/* Add Option Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-xs font-semibold mb-4">Add New Option</h2>
//               <input
//                 type="text"
//                 value={newOption}
//                 onChange={handleInputChange}
//                 className="p-1 border border-gray-300 rounded-md mb-4 text-sm"
//                 placeholder="Enter new option"
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2 text-xs"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleModalSave}
//                   className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xs"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Delete Option Modal */}
//         {isDeleteModalOpen && (
//           <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-sm font-semibold mb-4">Delete Option</h2>
//               {dropdownOptions.map((option, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between mb-2"
//                 >
//                   <span>{option}</span>
//                   <RiCloseCircleLine
//                     className="text-red-500 cursor-pointer"
//                     onClick={() => handleOptionDelete(option)}
//                   />
//                 </div>
//               ))}
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleDeleteModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-xs"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* No Options Modal */}
//         {isNoOptionsModalOpen && (
//           <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-sm font-semibold mb-4 ">
//                 No Options available for deletion
//               </h2>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleNoOptionsModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-xs"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Confirmation Modal */}
//         {isConfirmationModalOpen && (
//           <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
//             <div className="bg-white rounded-lg p-4">
//               <h2 className="text-sm font-semibold mb-4">
//                 Are you sure you want to delete this?
//               </h2>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleConfirmationModalClose}
//                   className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2 text-xs"
//                 >
//                   No
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleConfirmationModalYes}
//                   className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default DropdownForm;

import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiCloseCircleLine } from "react-icons/ri";

const DropdownForm = ({
  id,
  name,
  value,
  onChange,
  fixedOptions,
  fieldMappings,
  selectedIssuedTo,
}) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [newOption, setNewOption] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isNoOptionsModalOpen, setIsNoOptionsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [optionToDelete, setOptionToDelete] = useState("");

  useEffect(() => {
    // Load options from local storage if available
    const storedOptions = JSON.parse(localStorage.getItem(name));

    if (storedOptions) {
      setDropdownOptions(storedOptions);
    }
  }, [name]);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const handleSelectChange = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    setNewOption("");
    onChange(option);
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setNewOption(newValue);
    onChange(newValue);
  };

  const handleAddOption = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = () => {
    if (newOption !== "") {
      const updatedOptions = [...dropdownOptions, newOption];
      setDropdownOptions(updatedOptions);
      setNewOption("");

      // Store the updated options in local storage
      localStorage.setItem(name, JSON.stringify(updatedOptions));
    }
    setIsModalOpen(false);
  };

  const handleDeleteOption = () => {
    if (dropdownOptions.length === 0) {
      setIsNoOptionsModalOpen(true);
    } else {
      setIsDeleteModalOpen(true);
    }
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
    setOptionToDelete("");
  };

  const handleOptionDelete = (option) => {
    setOptionToDelete(option);
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
    setOptionToDelete("");
  };

  const handleConfirmationModalYes = () => {
    const updatedOptions = dropdownOptions.filter(
      (item) => item !== optionToDelete
    );
    setDropdownOptions(updatedOptions);
    setSelectedOption("");
    setIsDeleteModalOpen(false);
    setIsConfirmationModalOpen(false);
    setOptionToDelete("");
  };

  const handleNoOptionsModalClose = () => {
    setIsNoOptionsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the selectedOption value for further processing
  };

  const shouldRenderOptions =
    fixedOptions && fixedOptions.length > 0 && !fieldMappings[selectedIssuedTo];

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative flex items-center space-x-4">
          <label htmlFor={id} className="text-xs font-semibold w-32">
            {name}:
          </label>
          {shouldRenderOptions ? (
            <div className="relative inline-flex text-sm">
              <input
                type="text"
                id={id}
                value={selectedOption}
                onChange={handleInputChange}
                className="p-1 pl-6 text-xs pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="-- Select an option --"
                readOnly
              />
              <RiArrowDropDownLine className="absolute top-2 font-bold text-sm right-2 text-gray-700" />
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              >
                {fixedOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="relative inline-flex text-sm">
              <select
                id={id}
                value={selectedOption}
                onChange={handleSelectChange}
                className="p-1 pl-6 text-xs pr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">-- Select an option --</option>
                {dropdownOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* <RiArrowDropDownLine className="absolute top-2 font-bold text-sm right-2 text-gray-700" /> */}
            </div>
          )}
          {!shouldRenderOptions && (
            <>
              <button
                type="button"
                onClick={handleAddOption}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xs"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleDeleteOption}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 text-xs"
              >
                -
              </button>
            </>
          )}
        </div>

        {/* Add Option Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xs font-semibold mb-4">Add New Option</h2>
              <input
                type="text"
                value={newOption}
                onChange={handleInputChange}
                className="p-1 border border-gray-300 rounded-md mb-4 text-sm"
                placeholder="Enter new option"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleModalSave}
                  className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-xs"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Option Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-sm font-semibold mb-4">Delete Option</h2>
              {dropdownOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2"
                >
                  <span>{option}</span>
                  <RiCloseCircleLine
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleOptionDelete(option)}
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleDeleteModalClose}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* No Options Modal */}
        {isNoOptionsModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">
                No Options available for deletion
              </h2>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNoOptionsModalClose}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {isConfirmationModalOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this?
              </h2>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleConfirmationModalClose}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mr-2"
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={handleConfirmationModalYes}
                  className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DropdownForm;
