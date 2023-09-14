import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user);

  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-grow">
        <div>Dashboard</div>

        <UserButton />
      </section>
    </div>
  );
};

export default Dashboard;
