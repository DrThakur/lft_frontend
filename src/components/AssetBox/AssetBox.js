// import React, { useState } from "react";

// const AssetBox = ({ title, count, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="bg-gray-200 p-4 mb-4 rounded-md">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} (${count})`}</div>
//         <div>{showDetails ? "-" : "+"}</div>
//       </div>
//       {showDetails && (
//         <div className="mt-4">
//           <div className="font-bold">{`${title} Details:`}</div>
//           <table className="mt-2 w-full">
//             <thead>
//               <tr>
//                 <th>Asset</th>
//                 <th>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {details.map((asset) => (
//                 <tr key={asset.name}>
//                   <td>{asset.name}</td>
//                   <td>{asset.details}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetBox;

// import React, { useState } from "react";

// const AssetBox = ({ title, count, assets, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="bg-gray-200 p-4 mb-4 rounded-md">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} Details:`}</div>
//         {/* <div>{showDetails ? "-" : "+"}</div> */}
//       </div>
//       {showDetails && (
//         <div className="mt-4">
//           <div className="font-bold mt-4">{`${details[0].name}`}</div>
//           <table className="mt-2 w-full">
//             <thead>
//               <tr>
//                 <th>{console.log(details.name)}</th>
//                 <th>{console.log(details.value)}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {details.map((asset) => (
//                 <tr key={asset.name}>
//                   <td>{asset.name}</td>
//                   <td>{asset.details.value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetBox;

// import React, { useState } from "react";

// const AssetBox = ({ title, count, assets, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="bg-gray-200 p-4 mb-4 rounded-md">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} Details:`}</div>
//         {/* <div>{showDetails ? "-" : "+"}</div> */}
//       </div>
//       {showDetails && (
//         <div className="mt-4">
//           <div className="font-bold mt-4">{`${details[0].name}`}</div>
//           <table className="mt-2 w-full">
//             <thead>
//               <tr>
//                 <th>Field</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {details.map((asset) => (
//                 <tr key={asset.name}>
//                   <td>{asset.name}</td>
//                   <td>{asset.value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetBox;

// import React, { useState } from "react";

// const AssetBox = ({ title, count, assets, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <div className="bg-gray-200 p-4 mb-4 rounded-md">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} Details:`}</div>
//         {/* <div>{showDetails ? "-" : "+"}</div> */}
//       </div>
//       {showDetails && (
//         <div className="mt-4">
//           <div className="font-bold mt-4">{`${details[0].name}`}</div>
//           <table className="mt-2 w-full">
//             <thead>
//               <tr>
//                 <th>Field</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               {details[0].details.map((asset) => (
//                 <tr key={asset.name}>
//                   <td>{asset.name}</td>
//                   <td>{asset.value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetBox;

// import React, { useState } from "react";

// const AssetBox = ({ title, count, assets, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const transposeDetails = () => {
//     const transposedDetails = details[0].details.map((detail) => ({
//       field: detail.name,
//       value: detail.value,
//     }));
//     return transposedDetails;
//   };

//   return (
//     <div className="bg-gray-200 p-4 mb-4 rounded-md">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} Details:`}</div>
//         {/* <div>{showDetails ? "-" : "+"}</div> */}
//       </div>
//       {showDetails && (
//         <div className="mt-4">
//           <div className="font-bold mt-4">{`${details[0].name}`}</div>
//           <table className="mt-2 w-full">
//             <thead>
//               <tr>
//                 <th>Field</th>
//                 {transposeDetails().map((detail) => (
//                   <th key={detail.field}>{detail.field}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Value</td>
//                 {transposeDetails().map((detail) => (
//                   <td key={detail.field}>{detail.value}</td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetBox;

// import React, { useState } from "react";
// import UserTable from "../UserTable/UserTable";

// const AssetBox = ({ title, count, assets, details }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const transposeDetails = () => {
//     const transposedDetails = details[0].details.map((detail) => ({
//       field: detail.name,
//       value: detail.value,
//     }));
//     return transposedDetails;
//   };

//   return (
//     <div className="bg-blue-200 p-4 mb-4 rounded-md -mr-2 w-full">
//       <div
//         className={`flex justify-between items-center cursor-pointer ${
//           showDetails ? "font-bold text-center" : ""
//         }`}
//         onClick={toggleDetails}
//       >
//         <div>{`${title} Details:`}</div>
//         {/* <div>{showDetails ? "-" : "+"}</div> */}
//       </div>
//       {showDetails &&
//         assets.map((asset) => (
//           <div className="mt-4">
//             <div className="font-bold mt-4 mb-4">{`${asset.name}`}</div>
//             <div className=" h-48 mb-4">
//               <UserTable />
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default AssetBox;
import React, { useState } from "react";
import UserTable from "../UserTable/UserTable";

const AssetBox = ({ title, count, assets, details, backgroundColor }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const transposeDetails = () => {
    const transposedDetails = details[0].details.map((detail) => ({
      field: detail.name,
      value: detail.value,
    }));
    return transposedDetails;
  };

  return (
    <div className={`p-4 mb-12 rounded-md -mr-2 w-full ${backgroundColor}`}>
      <div
        className={`flex justify-between items-center cursor-pointer ${
          showDetails ? "font-bold text-center" : ""
        }`}
        onClick={toggleDetails}
      >
        <div>{`${title} Details:`}</div>
      </div>
      {showDetails &&
        assets.map((asset) => (
          <div className="mt-4">
            <div className="font-bold mt-4 mb-4">{`${asset.name}`}</div>
            <div className="mb-4 w-full">
              <UserTable />
            </div>
          </div>
        ))}
    </div>
  );
};

export default AssetBox;
