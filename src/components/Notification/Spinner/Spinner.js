import React from "react";

const Spinner = () => (
  <div className="spinner h-8 w-8">
    <div className="loaders relative font-xs w-44 h-44 rounded-full bg-black bg-gradient-to-r from-black to-transparent animate-spin transform translate-z-0">
      <div className="loader absolute bg-white w-3/4 h-3/4 rounded-full m-auto inset-0"></div>
    </div>
  </div>
);

export default Spinner;
