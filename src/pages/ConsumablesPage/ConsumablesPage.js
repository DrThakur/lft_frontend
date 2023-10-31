import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import consumablesCategory from "../../data/Consumables/ConsumablesCategory";

const ConsumablesPage = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <InfoBox categories={consumablesCategory} title="Consumables" />
    </div>
  );
};

export default ConsumablesPage;
