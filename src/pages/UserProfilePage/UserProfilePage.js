import React from "react";
import UserProfile from "../../components/UserProfile/UserProfile";

const UserProfilePage = ({ user }) => {
  console.log("User Profile Page", user);
  return (
    <div className="w-full">
      <h1 className="text-lg font-bold">User Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default UserProfilePage;
