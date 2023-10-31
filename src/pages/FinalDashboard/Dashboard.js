// import React from "react";
// import InfoBox from "../../components/InfoBox/InfoBox";
// import Pie from "../Pie";
// import DashboardCategory from "../../data/dashboardData/DashboardCategory";
// import RecentActivity from "../../components/RecentActivity/RecentActivity";
// import AssetLocation from "../../components/AssetLocation/AssetLocation";
// import UserCategory from "../../components/UserCategory/UserCategory";
// // import NewUserCategory from "../../components/NewUserCategory/NewUserCategory";
// // import DoughnutChartDemo from "../PieChart";

// const Dashboard = () => {
//   return (
//     <div className="flex flex-col">
//       <div>
//         <InfoBox categories={DashboardCategory} title="Dashboard" />
//       </div>
//       <div className="flex mt-3">
//         <div className="w-1/5 ml-2 rounded-lg shadow-md -mt-1 z-20 pt-6">
//           <h3 className="text-start font-bold p-2 ml-2 text-2xl">
//             Ticket Status
//           </h3>
//           <div className="-mb-4">{/* <Pie /> */}</div>
//         </div>
//         <div className="w-3/5 shadow-md ml-2 rounded-lg mb-5 py-1">
//           <RecentActivity />
//         </div>
//       </div>
//       <div className="flex mt-3">
//         <div className="w-1/2 ml-2 rounded-lg shadow-md h-16 -mt-1 z-20">
//           <AssetLocation />
//         </div>
//         <div className="w-1/2 shadow-md ml-2 rounded-lg mb-5">
//           <UserCategory />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import InfoBox from "../../components/InfoBox/InfoBox";
import Pie from "../Pie";
import DashboardCategory from "../../data/dashboardData/DashboardCategory";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import AssetLocation from "../../components/AssetLocation/AssetLocation";
import UserCategory from "../../components/UserCategory/UserCategory";
// import NewUserCategory from "../../components/NewUserCategory/NewUserCategory";
// import DoughnutChartDemo from "../PieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-item-1">
        <InfoBox categories={DashboardCategory} title="Dashboard" />
      </div>
      <div className="flex-item-2 mt-4">
        <div class="flex-container-2 flex flex-row flex-wrap">
          <div className="flex-item-2-2 flex-grow mb-4 h-full">
            <RecentActivity />
          </div>
          <div className="flex-item-2-1 ml-4">
            <Pie />
          </div>
          <div className="flex-item-2-3 mt-4 mb-1 w-1/2">
            <AssetLocation />
          </div>
          <div className="flex-item-2-4 mt-4 mb-6 w-1/2">
            <UserCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
