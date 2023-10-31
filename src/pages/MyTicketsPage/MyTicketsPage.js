import React from "react";
// import UnderConstructionPage from "../../components/UnderConstructionPage/UnderConstructionPage";
import UserTicketTable from "../../components/UserTicketTable/UserTicketTable";

const MyTicketsPage = () => {
  return (
    <div className="w-full">
      <UserTicketTable title={"My Tickets"} />
    </div>
  );
};

export default MyTicketsPage;
