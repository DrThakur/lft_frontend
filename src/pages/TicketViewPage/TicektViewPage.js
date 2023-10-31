import React from "react";
import TicketView from "../../components/TicketView/TicketView";
import { useParams } from "react-router-dom";

const TicektViewPage = ({ user }) => {
  const ticketObjId = useParams().id;

  return (
    <div>
      <TicketView ticketObjId={ticketObjId} user={user} />
    </div>
  );
};

export default TicektViewPage;
