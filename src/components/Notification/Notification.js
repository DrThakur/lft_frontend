// import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faBell, faEye } from "@fortawesome/free-solid-svg-icons";

// const NotificationMenu = ({ children }) => {
//   const notifications = [
//     {
//       id: 1,
//       title: "New Message",
//       message: "You have received a new message.",
//       time: "2 minutes ago",
//     },
//     {
//       id: 2,
//       title: "New Friend Request",
//       message: "You have a new friend request.",
//       time: "1 hour ago",
//     },
//     {
//       id: 3,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 4,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 5,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 6,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 7,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 8,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 9,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 10,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 11,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 12,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//     {
//       id: 13,
//       title: "Task Reminder",
//       message: "Don't forget to complete the task.",
//       time: "3 hours ago",
//     },
//   ];

//   return (
//     <div
//       className=" h-108 bg-white shadow-lg w-64 p-4"
//       style={{ marginTop: "90px" }}
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold">Notifications</h3>
//         <button className="text-blue-500 hover:text-blue-700">View All</button>
//       </div>
//       <div className="h-full overflow-scroll">
//         {notifications.length > 0 ? (
//           <ul className="divide-y divide-gray-200">
//             {notifications.map((notification) => (
//               <li key={notification.id} className="py-2">
//                 <div className="text-sm font-medium">{notification.title}</div>
//                 <div className="text-xs text-gray-500">
//                   {notification.message}
//                 </div>
//                 <div className="text-xs text-gray-500">{notification.time}</div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 text-center mt-4">No new notifications</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationMenu;

//Copy from Old:

import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell, faEye } from "@fortawesome/free-solid-svg-icons";

const NotificationMenu = () => {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      message: "You have received a new message.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      title: "New Friend Request",
      message: "You have a new friend request.",
      time: "1 hour ago",
    },
    {
      id: 3,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 4,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 5,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 6,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 7,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 8,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 9,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 10,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 11,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 12,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
    {
      id: 13,
      title: "Task Reminder",
      message: "Don't forget to complete the task.",
      time: "3 hours ago",
    },
  ];

  return (
    <div
      className="fixed z-10 -top-0.5 right-0 h-108 bg-white shadow-lg w-64 p-4 h-screen overflow-y-hidden flex flex-col "
      style={{ marginTop: "56.5px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button className="text-blue-500 hover:text-blue-700">View All</button>
      </div>
      <div className="h-full overflow-scroll">
        {notifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className="py-2">
                <div className="text-sm font-medium">{notification.title}</div>
                <div className="text-xs text-gray-500">
                  {notification.message}
                </div>
                <div className="text-xs text-gray-500">{notification.time}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center mt-4">No new notifications</p>
        )}
      </div>
    </div>
  );
};

export default NotificationMenu;
