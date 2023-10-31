import React from "react";
import TicketTable from "../../components/TicketTable/TicketTable";

const Tickets = ({ user }) => {
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <TicketTable user={user} />
    </div>
  );
};

export default Tickets;
