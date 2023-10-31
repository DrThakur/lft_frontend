import React from "react";
import UnderConstructionPage from "../../components/UnderConstructionPage/UnderConstructionPage";
import { useState } from "react";
import AppearanceSettings from "../../components/Settings/AppearanceSettings";
import SecuritySettings from "../../components/Settings/SecuritySettings";
import HistorySettings from "../../components/Settings/HistorySettings";
import AcitivitySettings from "../../components/Settings/AcitivitySettings";
import NotificationSettings from "../../components/Settings/NotificationSettings";
import SlaSettings from "../../components/Settings/SlaSettings";
import AccountsSetting from "../../components/Settings/AccountsSetting";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Appearance");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderSettingsContent = () => {
    switch (activeTab) {
      case "Appearance":
        return <AppearanceSettings />;
      case "Account Settings":
        return <AccountsSetting />;
      case "Security Settings":
        return <SecuritySettings />;
      case "History":
        return <HistorySettings />;
      case "Activity":
        return <AcitivitySettings />;
      case "Notification":
        return <NotificationSettings />;
      case "SLA Settings":
        return <SlaSettings />;
      default:
        return null;
    }
  };

  return (
    // <div className="grid grid-cols-5 gap-2">
    //   <div className=" col-span-1 h-screen bg-gray-200 p-6 rounded-md">
    //     <ul className="flex flex-col justify-evenly items-start gap-6">
    //       <li
    //         className={`cursor-pointer  ${
    //           activeTab === "Appearance"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("Appearance")}
    //       >
    //         Appearance
    //       </li>
    //       <li
    //         className={`cursor-pointer ${
    //           activeTab === "Account Settings"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("Account Settings")}
    //       >
    //         Account
    //       </li>
    //       <li
    //         className={`cursor-pointer ${
    //           activeTab === "Security Settings"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("Security Settings")}
    //       >
    //         Security
    //       </li>
    //       <li
    //         className={`cursor-pointer ${
    //           activeTab === "History"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("History")}
    //       >
    //         History
    //       </li>
    //       <li
    //         className={`cursor-pointer ${
    //           activeTab === "Activity"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("Activity")}
    //       >
    //         Activity
    //       </li>
    //       <li
    //         className={`cursor-pointer ${
    //           activeTab === "Notification"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("Notification")}
    //       >
    //         Notification
    //       </li>
    //       <li
    //         className={`cursor-pointer ${
    //           activeTab === "SLA Settings"
    //             ? "font-bold bg-white rounded-md shadow-md p-2"
    //             : ""
    //         }`}
    //         onClick={() => handleTabClick("SLA Settings")}
    //       >
    //         SLA
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="col-span-4 p-4">{renderSettingsContent()}</div>
    // </div>
    <div>
      <UnderConstructionPage />
    </div>
  );
};

export default SettingsPage;
