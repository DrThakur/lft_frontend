import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import ticketCategory from "../../data/TicketData/TicketCategory";

const TicketPage = () => {
  return (
    <div>
      <InfoBox categories={ticketCategory} title="IT Support" />
    </div>
  );
};

export default TicketPage;
