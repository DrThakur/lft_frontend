import React from "react";
// import TabbedForm from "../../components/Ticket/TabbedForm/TabbedForm";
import DropdownForm from "../../components/Ticket/DropdownForm/DropdownFrom";

const TicketFormPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      <h1 className="font-bold text-2xl text-start ml-3 mt-5 mb-5 w-full">
        Raise Your Concern:
      </h1>
      <div className="w-full ml-80">
        <DropdownForm />
      </div>
    </div>
  );
};

export default TicketFormPage;
