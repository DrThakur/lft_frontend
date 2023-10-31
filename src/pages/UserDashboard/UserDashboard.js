import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import userData from "../../data/UserData/UserData";
import RecentTicket from "../../components/RecentTicket/RecentTicket";
import SystemRights from "../../components/SystemRights/SystemRights";

const UserDashboard = ({ user }) => {
  const systemName = "LFT007";
  const systemModel = "Lenovo i3-7th Gen";
  const userRights = "User Rights";
  // console.log("My Dashbaord user", user);

  return (
    <div className="flex flex-col w-full">
      <div className="flex-item-1">
        <InfoBox categories={userData} title="Dashboard" />
      </div>
      <div className="flex-item-2 mt-4">
        <div class="flex-container-2 flex flex-row flex-wrap">
          <div className="flex-item-2-1 flex w-full">
            <RecentTicket user={user} />
          </div>
          <div className="flex-item-2-2 mt-2">{/* <RecentActivity /> */}</div>
          {/* <div className="flex-item-2-3 mt-4 mb-8 w-full">
            <SystemRights
              systemName={systemName}
              systemModel={systemModel}
              userRights={userRights}
            />
          </div> */}
          <div className="flex-item-2-4 mt-16 mb-6 w-full">
            {/* <UserCategory /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
