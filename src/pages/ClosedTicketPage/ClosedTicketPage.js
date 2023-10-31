import React from "react";
import TicketTableByStatus from "../../components/TicketTableByStatus/TicketTableByStatus";

const ClosedTicketPage = () => {
  const statuses = ["Closed"];
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <TicketTableByStatus title={"Closed Tickets"} statuses={statuses} />
    </div>
  );
};

export default ClosedTicketPage;
