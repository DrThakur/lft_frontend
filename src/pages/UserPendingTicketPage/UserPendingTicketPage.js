import React from "react";
import UserTicketTableByStatus from "../../components/UserTicketTableByStatus/UserTicketTableByStatus";

const UserPendingTicketPage = () => {
  const statuses = ["Resolved", "Open", "New"];
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <UserTicketTableByStatus title={"Pending Tickets"} statuses={statuses} />
    </div>
  );
};

export default UserPendingTicketPage;
