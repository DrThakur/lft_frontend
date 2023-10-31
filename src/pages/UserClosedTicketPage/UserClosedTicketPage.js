import React from "react";
import UserTicketTableByStatus from "../../components/UserTicketTableByStatus/UserTicketTableByStatus";

const UserClosedTicketPage = () => {
  const statuses = ["Closed"];
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <UserTicketTableByStatus title={"Closed Tickets"} statuses={statuses} />
    </div>
  );
};

export default UserClosedTicketPage;
