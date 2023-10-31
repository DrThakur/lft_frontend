import React from "react";
import ViewPageWithTabs from "../../components/ViewPageWithTabs/ViewPageWithTabs";
import { useParams } from "react-router-dom";

const UserViewPage = () => {
  const userId = useParams().id;
  console.log(userId);
  return (
    <div className="w-96 flex flex-col flex-grow justify-center h-full">
      <ViewPageWithTabs userId={userId} />
    </div>
  );
};

export default UserViewPage;
