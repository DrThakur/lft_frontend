import React from "react";
import TicketTableByStatus from "../../components/TicketTableByStatus/TicketTableByStatus";

const PendingTicketPage = () => {
  const statuses = ["Resolved", "Open", "New"];
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <TicketTableByStatus title={"Pending Tickets"} statuses={statuses} />
    </div>
  );
};

export default PendingTicketPage;
