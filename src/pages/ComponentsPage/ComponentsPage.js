import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import componentsCategory from "../../data/Components/ComponentsCategory";

const ComponentsPage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <InfoBox categories={componentsCategory} title="Components" />
    </div>
  );
};

export default ComponentsPage;
