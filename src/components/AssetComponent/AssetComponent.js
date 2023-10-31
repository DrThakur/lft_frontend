import React, { useState } from "react";
import AssetBox from "../AssetBox/AssetBox";

const AssetsComponent = () => {
  const assetCategories = [
    {
      title: "Individual Assets",
      count: 0,
      assets: [
        { name: "Desktops", count: 0 },
        { name: "Laptops", count: 0 },
      ],
      details: [
        {
          name: "Desktop",
          details: [
            { name: "System Type", value: "Desktop" },
            { name: "Asset Code", value: "LFTDB001" },
            { name: "Service Tag No.", value: "CX5W79J" },
            {
              name: "Procured/Warranty Start Date",
              value: "07 July 2023",
            },
            { name: "Model", value: "Dell OptiPlex 7050" },
            { name: "CPU", value: "Core i7-7th Gen-7700-3.50GHz" },
            { name: "RAM Type", value: "DDR4 -2400" },
            { name: "RAM Size", value: "16GB" },
            { name: "Hard Disk Type", value: "HDD" },
            { name: "Hard Disk Size", value: "1TB" },
            { name: "Check in Date", value: "07 July 2023" },
            { name: "Check-Out Date", value: "08 July 2023" },
          ],
        },
        {
          name: "Laptop",
          details: [
            { name: "System Type", value: "Desktop" },
            { name: "Asset Code", value: "LFTDB001" },
            { name: "Service Tag No.", value: "CX5W79J" },
            {
              name: "Procured/Warranty Start Date",
              value: "07 July 2023",
            },
            { name: "Model", value: "Dell OptiPlex 7050" },
            { name: "CPU", value: "Core i7-7th Gen-7700-3.50GHz" },
            { name: "RAM Type", value: "DDR4 -2400" },
            { name: "RAM Size", value: "16GB" },
            { name: "Hard Disk Type", value: "HDD" },
            { name: "Hard Disk Size", value: "1TB" },
            { name: "Check in Date", value: "07 July 2023" },
            { name: "Check-Out Date", value: "08 July 2023" },
          ],
        },
      ],
    },
    {
      title: "Project Assets",
      count: 0,
      assets: [
        { name: "Desktops", count: 0 },
        { name: "Laptops", count: 0 },
      ],
      details: [
        {
          name: "Projector",
          details: [
            { name: "System Type", value: "Desktop" },
            { name: "Asset Code", value: "LFTDB001" },
            { name: "Service Tag No.", value: "CX5W79J" },
            {
              name: "Procured/Warranty Start Date",
              value: "07 July 2023",
            },
            { name: "Model", value: "Dell OptiPlex 7050" },
            { name: "CPU", value: "Core i7-7th Gen-7700-3.50GHz" },
            { name: "RAM Type", value: "DDR4 -2400" },
            { name: "RAM Size", value: "16GB" },
            { name: "Hard Disk Type", value: "HDD" },
            { name: "Hard Disk Size", value: "1TB" },
            { name: "Check in Date", value: "07 July 2023" },
            { name: "Check-Out Date", value: "08 July 2023" },
          ],
        },
      ],
    },
    {
      title: "Isolated Assets",
      count: 0,
      assets: [
        { name: "Desktops", count: 0 },
        { name: "Laptops", count: 0 },
      ],
      details: [
        {
          name: "Printer",
          details: [
            { name: "System Type", value: "Desktop" },
            { name: "Asset Code", value: "LFTDB001" },
            { name: "Service Tag No.", value: "CX5W79J" },
            {
              name: "Procured/Warranty Start Date",
              value: "07 July 2023",
            },
            { name: "Model", value: "Dell OptiPlex 7050" },
            { name: "CPU", value: "Core i7-7th Gen-7700-3.50GHz" },
            { name: "RAM Type", value: "DDR4 -2400" },
            { name: "RAM Size", value: "16GB" },
            { name: "Hard Disk Type", value: "HDD" },
            { name: "Hard Disk Size", value: "1TB" },
            { name: "Check in Date", value: "07 July 2023" },
            { name: "Check-Out Date", value: "08 July 2023" },
          ],
        },
        {
          name: "Scanner",
          details: [
            { name: "System Type", value: "Desktop" },
            { name: "Asset Code", value: "LFTDB001" },
            { name: "Service Tag No.", value: "CX5W79J" },
            {
              name: "Procured/Warranty Start Date",
              value: "07 July 2023",
            },
            { name: "Model", value: "Dell OptiPlex 7050" },
            { name: "CPU", value: "Core i7-7th Gen-7700-3.50GHz" },
            { name: "RAM Type", value: "DDR4 -2400" },
            { name: "RAM Size", value: "16GB" },
            { name: "Hard Disk Type", value: "HDD" },
            { name: "Hard Disk Size", value: "1TB" },
            { name: "Check in Date", value: "07 July 2023" },
            { name: "Check-Out Date", value: "08 July 2023" },
          ],
        },
        {
          name: "Phone",
          details: [
            { name: "System Type", value: "Desktop" },
            { name: "Asset Code", value: "LFTDB001" },
            { name: "Service Tag No.", value: "CX5W79J" },
            {
              name: "Procured/Warranty Start Date",
              value: "07 July 2023",
            },
            { name: "Model", value: "Dell OptiPlex 7050" },
            { name: "CPU", value: "Core i7-7th Gen-7700-3.50GHz" },
            { name: "RAM Type", value: "DDR4 -2400" },
            { name: "RAM Size", value: "16GB" },
            { name: "Hard Disk Type", value: "HDD" },
            { name: "Hard Disk Size", value: "1TB" },
            { name: "Check in Date", value: "07 July 2023" },
            { name: "Check-Out Date", value: "08 July 2023" },
          ],
        },
      ],
    },
  ];

  const getRandomColor = (index) => {
    const colors = [
      "bg-green-100",
      "bg-blue-100",
      "bg-orange-100",
      "bg-yellow-100",
      "bg-lime-100",
      "bg-cyan-100",
      "bg-sky-100",
      "bg-indigo-100",
      "bg-fuchsia-100",
    ];
    const colorIndex = index % colors.length;
    return colors[colorIndex];
  };

  const [activeTab, setActiveTab] = useState(0);
  const [selectedColor, setSelectedColor] = useState("bg-blue-200");

  const handleTabClick = (index, color) => {
    setActiveTab(index);
    setSelectedColor(color);
  };

  return (
    <div className="container mx-auto py-8 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Assets Issued</h1>
      <div className="flex mb-4 flex-wrap">
        {assetCategories.map((category, index) => (
          <div
            key={index}
            className={`text-center px-4 py-4 ml-4 mr-8 mb-4 cursor-pointer flex flex-col flex-grow-0 font-bold shadow-md rounded-lg w-1/4 ${
              index === activeTab
                ? `shadow-lg shadow-green-500`
                : getRandomColor(index)
            }`}
            style={{
              backgroundColor: index === activeTab ? selectedColor : "",
            }}
            onClick={() => handleTabClick(index, getRandomColor(index))}
          >
            {category.title} ({category.count})
            {category.assets.map((asset, index) => (
              <div
                key={index}
                className="flex items-center ml-4 text-blue-500 text-left font-semibold"
              >
                <span className="ml-4 mr-2">{asset.name}</span>
                <span>:</span>
                <span className="ml-4">{asset.count}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      {assetCategories[activeTab] && (
        <AssetBox
          title={assetCategories[activeTab].title}
          count={assetCategories[activeTab].count}
          assets={assetCategories[activeTab].assets}
          details={assetCategories[activeTab].details}
          backgroundColor={selectedColor}
        />
      )}
    </div>
  );
};

export default AssetsComponent;
