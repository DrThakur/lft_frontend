// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserCategory = () => {
//   const categoryData = [
//     {
//       id: 1,
//       name: "Common",
//       total: 10,
//       gurgaon: {
//         desktop: 5,
//         laptop: 3,
//         tablets: 2,
//         total: 10,
//       },
//       bangalore: {
//         desktop: 3,
//         laptop: 4,
//         tablets: 2,
//         total: 9,
//       },
//     },
//     {
//       id: 2,
//       name: "Consultant",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 3,
//       name: "Employee",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 4,
//       name: "Faulty",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 5,
//       name: "Intern",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 6,
//       name: "Isolated",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 7,
//       name: "IT Stock",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 8,
//       name: "Low Configuration",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 9,
//       name: "Left Employee",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 10,
//       name: "Project",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     {
//       id: 11,
//       name: "Servers",
//       total: 5,
//       gurgaon: {
//         desktop: 2,
//         laptop: 1,
//         tablets: 2,
//         total: 5,
//       },
//       bangalore: {
//         desktop: 1,
//         laptop: 2,
//         tablets: 2,
//         total: 5,
//       },
//     },
//     // Add more category objects as needed
//   ];

//   const [showContent, setShowContent] = useState(true);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const handleViewAll = () => {
//     navigate("/user-category");
//   };

//   const handleToggleContent = () => {
//     setShowContent(!showContent);
//   };

//   const visibleCategories = showAll ? categoryData : categoryData.slice(0);

//   const handleCategoryClick = (categoryId) => {
//     navigate(`/category/${categoryId}`); // Replace with the actual category page URL
//   };

//   return (
//     <div className="bg-white p-2 shadow rounded-lg -mb-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold ml-2">User Category</h2>
//         <button
//           className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none mb-2 mt-2 mr-2"
//           onClick={handleToggleContent}
//         >
//           <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
//         </button>
//       </div>
//       {showContent && (
//         <div className="overflow-x-auto mt-2 overflow-y-auto">
//           <div className="max-h-80 overflow-y-auto">
//             <table className="table-auto w-full">
//               <thead className="sticky top-0">
//                 <tr className="bg-gray-200 text-gray-600">
//                   <th className="py-2 px-4">Category</th>
//                   <th className="py-2 px-4">Total</th>
//                   <th className="py-2 px-4" colSpan="4">
//                     Gurgaon
//                   </th>
//                   <th className="py-2 px-4" colSpan="4">
//                     Bangalore
//                   </th>
//                 </tr>
//                 <tr className="bg-gray-200 text-gray-600">
//                   <th className="py-2 px-4">-</th>
//                   <th className="py-2 px-4">-</th>
//                   <th className="py-2 px-4">Desktop</th>
//                   <th className="py-2 px-4">Laptop</th>
//                   <th className="py-2 px-4">Tablets</th>
//                   <th className="py-2 px-4">Total</th>
//                   <th className="py-2 px-4">Desktop</th>
//                   <th className="py-2 px-4">Laptop</th>
//                   <th className="py-2 px-4">Tablets</th>
//                   <th className="py-2 px-4">Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {visibleCategories.map((category) => (
//                   <React.Fragment key={category.id}>
//                     <tr>
//                       <td className="py-2 px-4">
//                         <a
//                           href={`/category/${category.id}`} // Replace with the actual category page URL
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleCategoryClick(category.id);
//                           }}
//                           className="text-blue-500 hover:underline"
//                         >
//                           {category.name}
//                         </a>
//                       </td>
//                       <td className="py-2 px-4">{category.total}</td>
//                       <td className="py-2 px-4">{category.gurgaon.desktop}</td>
//                       <td className="py-2 px-4">{category.gurgaon.laptop}</td>
//                       <td className="py-2 px-4">{category.gurgaon.tablets}</td>
//                       <td className="py-2 px-4">{category.gurgaon.total}</td>
//                       <td className="py-2 px-4">
//                         {category.bangalore.desktop}
//                       </td>
//                       <td className="py-2 px-4">{category.bangalore.laptop}</td>
//                       <td className="py-2 px-4">
//                         {category.bangalore.tablets}
//                       </td>
//                       <td className="py-2 px-4">{category.bangalore.total}</td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       {showContent && !showAll && (
//         <button
//           className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={handleViewAll}
//         >
//           View All
//         </button>
//       )}
//     </div>
//   );
// };

// export default UserCategory;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCategory = () => {
  const categoryData = [
    {
      id: 1,
      name: "Common",
      total: 10,
      gurgaon: {
        desktop: 5,
        laptop: 3,
        tablets: 2,
        total: 10,
      },
      bangalore: {
        desktop: 3,
        laptop: 4,
        tablets: 2,
        total: 9,
      },
    },
    {
      id: 2,
      name: "Consultant",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 3,
      name: "Employee",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 4,
      name: "Faulty",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 5,
      name: "Intern",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 6,
      name: "Isolated",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 7,
      name: "IT Stock",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 8,
      name: "Low Configuration",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 9,
      name: "Left Employee",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 10,
      name: "Project",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    {
      id: 11,
      name: "Servers",
      total: 5,
      gurgaon: {
        desktop: 2,
        laptop: 1,
        tablets: 2,
        total: 5,
      },
      bangalore: {
        desktop: 1,
        laptop: 2,
        tablets: 2,
        total: 5,
      },
    },
    // Add more category objects as needed
  ];

  const [showContent, setShowContent] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/user-category");
  };

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const visibleCategories = showAll ? categoryData : categoryData.slice(0);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`); // Replace with the actual category page URL
  };

  return (
    <div className="bg-blue-50 p-2 shadow rounded-lg -mb-6 w-full h-108">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ml-2">Employee By Category</h2>
        {/* <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none mb-2 mt-2 mr-2"
          onClick={handleToggleContent}
        >
          <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
        </button> */}
      </div>
      {showContent && (
        <div className="overflow-x-auto mt-2 overflow-y-auto">
          <div className="max-h-80 overflow-y-auto">
            <table className="table-auto w-full">
              <thead className="sticky top-0">
                <tr className="bg-gray-200 text-gray-600">
                  <th
                    className="bg-red-200 py-2 px-4"
                    rowSpan="2"
                    align="center"
                  >
                    Category
                  </th>
                  <th
                    className="bg-red-200 py-2 px-4"
                    rowSpan="2"
                    align="center"
                  >
                    Total
                  </th>
                  <th className="bg-green-200 py-2 px-4" colSpan="4">
                    Gurgaon
                  </th>
                  <th className="bg-yellow-200 py-2 px-4" colSpan="4">
                    Bangalore
                  </th>
                </tr>
                <tr className="bg-gray-200 text-gray-600 border-b-2 border-gray-500">
                  {/* <th className="bg-blue-100 py-2 px-4"></th>
                  <th className="bg-blue-200 py-2 px-4"></th> */}
                  <th className="bg-green-200 py-2 px-4">Desktop</th>
                  <th className="bg-green-200 py-2 px-4">Laptop</th>
                  <th className="bg-green-200 py-2 px-4">Tablets</th>
                  <th className="bg-green-200 py-2 px-4">Total</th>
                  <th className="bg-yellow-200 py-2 px-4">Desktop</th>
                  <th className="bg-yellow-200 py-2 px-4">Laptop</th>
                  <th className="bg-yellow-200 py-2 px-4">Tablets</th>
                  <th className="bg-yellow-200 py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {visibleCategories.map((category) => (
                  <React.Fragment key={category.id}>
                    <tr>
                      <td className="bg-red-200 py-2 px-4">
                        <a
                          href={`/category/${category.id}`} // Replace with the actual category page URL
                          onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick(category.id);
                          }}
                          className="text-blue-500 hover:text-blue-700 hover:font-semibold"
                        >
                          {category.name}
                        </a>
                      </td>
                      <td className="bg-red-200 py-2 px-4">{category.total}</td>
                      <td className="bg-green-200 py-2 px-4">
                        {category.gurgaon.desktop}
                      </td>
                      <td className="bg-green-200 py-2 px-4">
                        {category.gurgaon.laptop}
                      </td>
                      <td className="bg-green-200 py-2 px-4">
                        {category.gurgaon.tablets}
                      </td>
                      <td className="bg-green-200 py-2 px-4">
                        {category.gurgaon.total}
                      </td>
                      <td className="bg-yellow-200 py-2 px-4">
                        {category.bangalore.desktop}
                      </td>
                      <td className="bg-yellow-200 py-2 px-4">
                        {category.bangalore.laptop}
                      </td>
                      <td className="bg-yellow-200 py-2 px-4">
                        {category.bangalore.tablets}
                      </td>
                      <td className="bg-yellow-200 py-2 px-4">
                        {category.bangalore.total}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showContent && !showAll && (
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleViewAll}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default UserCategory;
