import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import selfSupportCategory from "../../data/SelfSupportCategory/SelfSupportCategory";

const SelfSupportPage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <InfoBox categories={selfSupportCategory} title="Self Support" />
    </div>
  );
};

export default SelfSupportPage;
