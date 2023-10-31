import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUserCategory = () => {
  const categoryData = [
    {
      id: 1,
      category: "Common",
      type: "Type A",
      total: 10,
      gurgaon: {
        allAssets: {
          desktop: 3,
          laptop: 4,
          tablets: 2,
          total: 9,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 2,
          laptop: 3,
          tablets: 1,
          total: 6,
        },
      },
    },
    {
      id: 2,
      category: "Consultant",
      type: "Type B",
      total: 15,
      gurgaon: {
        allAssets: {
          desktop: 5,
          laptop: 6,
          tablets: 4,
          total: 15,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 3,
          laptop: 4,
          tablets: 2,
          total: 9,
        },
      },
    },
    {
      id: 3,
      category: "Employee",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 4,
      category: "Faulty",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Intern",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Isolated",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "IT Stock",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Low Configuration",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Left Employee",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Project",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Servers",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    {
      id: 3,
      category: "Employee",
      type: "Type C",
      total: 20,
      gurgaon: {
        allAssets: {
          desktop: 8,
          laptop: 9,
          tablets: 3,
          total: 20,
        },
      },
      bangalore: {
        allAssets: {
          desktop: 6,
          laptop: 7,
          tablets: 4,
          total: 17,
        },
      },
    },
    //     // Add more category items as needed
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
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="bg-white p-2 shadow rounded-lg -mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ml-2">User Category</h2>
        <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none mb-2 mt-2 mr-2"
          onClick={handleToggleContent}
        >
          <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
        </button>
      </div>
      {showContent && (
        <div className="overflow-x-auto overflow-y-auto mt-2">
          <div className="max-h-80 overflow-y-scroll">
            <table className="table-auto w-full">
              <thead className="sticky top-0">
                <tr className="bg-gray-200 text-gray-600">
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4" colSpan="4">
                    Gurgaon
                  </th>
                  <th className="py-2 px-4" colSpan="4">
                    Bangalore
                  </th>
                </tr>
                <tr className="bg-gray-200 text-gray-600">
                  <th className="py-2 px-4">-</th>
                  <th className="py-2 px-4">-</th>
                  <th className="py-2 px-4">Desktop</th>
                  <th className="py-2 px-4">Laptop</th>
                  <th className="py-2 px-4">Tablets</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Desktop</th>
                  <th className="py-2 px-4">Laptop</th>
                  <th className="py-2 px-4">Tablets</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {visibleCategories.map((category) => (
                  <React.Fragment key={category.id}>
                    <tr>
                      <td className="py-2 px-4">
                        <a
                          href={`/category/${category.id}`} // Replace with the actual category page URL
                          onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick(category.id);
                          }}
                          className="text-blue-500 hover:text-blue-700 hover:font-semibold"
                        >
                          {category.category}
                        </a>
                      </td>
                      <td className="py-2 px-4">{category.total}</td>
                      <td className="py-2 px-4">
                        {category.gurgaon.allAssets.desktop}
                      </td>
                      <td className="py-2 px-4">
                        {category.gurgaon.allAssets.laptop}
                      </td>
                      <td className="py-2 px-4">
                        {category.gurgaon.allAssets.tablets}
                      </td>
                      <td className="py-2 px-4">
                        {category.gurgaon.allAssets.total}
                      </td>
                      <td className="py-2 px-4">
                        {category.bangalore.allAssets.desktop}
                      </td>
                      <td className="py-2 px-4">
                        {category.bangalore.allAssets.laptop}
                      </td>
                      <td className="py-2 px-4">
                        {category.bangalore.allAssets.tablets}
                      </td>
                      <td className="py-2 px-4">
                        {category.bangalore.allAssets.total}
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

export default NewUserCategory;
