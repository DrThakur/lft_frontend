import React from "react";

const ChartHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p className="text-sm text-gray-400">Chart</p>
      <p className="text-sm font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
        {category}
      </p>
    </div>
    <p className="text-center dark:text-gray-200 text-xl text-bold ">{title}</p>
  </div>
);

export default ChartHeader;
