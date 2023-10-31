import React from "react";
import UnderConstructionPage from "../../components/UnderConstructionPage/UnderConstructionPage";
import { useParams } from "react-router-dom";
// import TicketView from "../../components/TicketView/TicketView";

const IndividualAssetPage = () => {
  const { assetType } = useParams();

  function formatString(str) {
    const parts = str.split("-");
    const formattedParts = parts.map((part) => capitalizeFirstLetter(part));
    return formattedParts.join(" ");
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">{formatString(assetType)}</h1>
      <UnderConstructionPage />
      {/* <TicketView /> */}
    </div>
  );
};

export default IndividualAssetPage;
