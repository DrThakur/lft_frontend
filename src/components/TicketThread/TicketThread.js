import React from "react";

const TicketThread = ({
  user,
  ticket,
  messages,
  members,
  formatDate,
  scrollRef,
}) => {
  // console.log("my all messages-1", messages);
  // console.log("my all messages-2", messages[0]);
  // console.log("my all messages-2", messages[0]?.sender);
  // // console.log("my all messages-3", messages[0].sender);
  // console.log("my all messages-4", messages[0]?.createdAt);
  // console.log("my all messages-5", messages[0]?.ticketId);
  // console.log("My ticket thread assdd", ticket.createdBy?._id);
  // console.log("My ticket thread assddinedTo", ticket.assignedTo?.fullName);
  // console.log("My newlyy appointed Members", members);

  // const getSenderInfo = (senderId) => {
  //   return members.find((member) => member._id === senderId) || null;
  // };

  return (
    <div className="bg-white rounded-lg h-80 overflow-y-scroll ">
      <div
        className={`flex flex-row ${
          user._id === ticket.createdBy?._id
            ? "justify-end items-end -mt-2 mb-2"
            : "justify-start items-start"
        } `}
      >
        <img
          src={`http://localhost:8002${ticket.createdBy?.profileImageURL}`}
          alt="user avatar"
          className="w-32 h-32 rounded-full ml-3 mt-2"
        />
        <div className="flex flex-col ml-4 w-3/4 rounded-lg shadow-md mt-2">
          <h1
            className={`p-4 rounded-md ${
              user._id === ticket.createdBy?._id
                ? "bg-blue-300"
                : "bg-green-300"
            }`}
          >
            <span className="text-xl font-bold">
              {ticket.createdBy?.fullName}
            </span>{" "}
            posted {formatDate(ticket?.createdAt)}
          </h1>
          <h1 className="bg-white p-4">
            {ticket.requirementDetails || ticket.issueDescription}
          </h1>
        </div>
      </div>
      {messages.map((message) => {
        // const senderInfo = getSenderInfo(message.senderId);
        return (
          <div
            className={`flex flex-row ${
              user._id === message.senderId
                ? "justify-end items-end -mt-2 mb-2"
                : "justify-start items-start"
            } `}
            key={message.id}
            ref={scrollRef}
          >
            <img
              src={`http://localhost:8002${message.senderImage}`}
              alt="user avatar"
              className="w-32 h-32 rounded-full ml-3 mt-2"
            />
            <div className="flex flex-col ml-4 w-3/4 rounded-lg shadow-md mt-2">
              <h1
                className={`p-4 rounded-md ${
                  user._id === message.senderId ? "bg-blue-300" : "bg-green-300"
                }`}
              >
                <span className="text-xl font-bold">{message.senderName}</span>{" "}
                posted {formatDate(message?.createdAt)}
              </h1>
              <h1 className="bg-white p-4">{message?.text}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketThread;
