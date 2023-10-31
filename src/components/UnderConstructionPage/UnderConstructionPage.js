import React from "react";

const UnderConstructionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-inherit">
      <h1 className="text-4xl font-semibold mb-4">Page Under Construction</h1>
      <img
        src="../cogwheel.png"
        alt="Under Construction"
        className="w-56 h-auto animate-[spin_3s_linear_infinite]"
      />
      <p className="mt-4 text-gray-600">
        We're working on making this page awesome for you!
      </p>
    </div>
  );
};

export default UnderConstructionPage;
