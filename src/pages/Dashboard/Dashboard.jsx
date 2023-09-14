import React, { useEffect, useState } from 'react';
import { UserButton, useUser, useAuth } from '@clerk/clerk-react';
// import { verifyToken } from '../../api';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../state/slices/authSlice';

const Dashboard = () => {
  // const dispatch = useDispatch();
  // const { getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  // const [token, setToken] = useState();
  // const [expiryTime, setExpiryTime]= useState();

  // useEffect(() => {
  //   if(token && expiryTime) {
  //     dispatch(logIn({
  //       user,
  //       token,
  //       expiryTime
  //     }));
  //   }
  // }, [user, token, expiryTime, dispatch]);

  // useEffect(() => {
  //   // Function to simulate sleep
  //   function sleep(ms) {
  //     return new Promise(resolve => setTimeout(resolve, ms));
  //   }

  //   const generateToken = async () => {
  //     const token = await getToken();
  //     console.log(token)
  //     setToken(token);

  //     setExpiryTime(Date.now() + 55*60*1000);
  
  //     await sleep(500);
  //   }

  //   // if()
  //   generateToken();
    

  //   // const verify = async () => {
  //   //   const token = await getToken();
  //   //   setToken()
  //   //   console.log("token", token)

  //   //   await sleep(500);
      
  //   //   // Authorisation token
  //   //   try {
  //   //     const response = await verifyToken(user.id, token);

  //   //     console.log(response);
  //   //   } catch (error) {
  //   //     console.log(error.message)
  //   //   }
  //   // }

  //   // verify();
  // }, [getToken, setExpiryTime]);

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