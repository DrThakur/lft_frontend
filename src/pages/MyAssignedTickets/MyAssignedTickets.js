import React from "react";
import AssignedTicketTable from "../../components/AssignedTicketTable/AssignedTicketTable";

const MyAssignedTickets = ({user}) => {
  return (
    <div>
      <AssignedTicketTable user={user} />
    </div>
  );
};

export default MyAssignedTickets;
