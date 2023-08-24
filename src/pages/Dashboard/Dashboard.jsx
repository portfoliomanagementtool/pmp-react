import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  console.log(user)

  return (
    <section>
        <div>Dashboard</div>
        <UserButton />
    </section>
  )
}

export default Dashboard;