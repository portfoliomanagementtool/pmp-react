import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { LogIn, Register, LandingPage, Dashboard } from './pages/pages';
import { 
  SignedIn,
  SignedOut,
  useUser,
  useAuth
} from "@clerk/clerk-react";
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from './state/slices/authSlice';

const RouteManger = () => {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.auth);
  const { getToken, isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const [token, setToken] = useState();
  const [expiryTime, setExpiryTime]= useState(0);

  useEffect(() => {
    if(token) {
      dispatch(logIn({
        user,
        token,
        expiryTime
      }));
    }
  }, [user, token, expiryTime, dispatch]);

  useEffect(() => {
    // Function to simulate sleep
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const generateToken = async () => {
      const token = await getToken();
      setToken(token);

      setExpiryTime(Date.now() + 55*60*1000);
  
      await sleep(500);
    }

    if (isLoaded && isSignedIn && authUser) {
      let currentTime = Date.now();
      // if(authUser || currentTime > authUser.expiryTime) {
        generateToken();
      // }
    }
  }, [getToken, isSignedIn, isLoaded, setExpiryTime])

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/sign-in/*"
        element={<LogIn routing="path" path="/sign-in" />}
      />
      <Route
        path="/sign-up/*"
        element={<Register routing="path" path="/sign-up" />}
      />
      <Route
        path="/dashboard"
        element={
        <>
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <LandingPage />
          </SignedOut>
        </>
        }
      />
    </Routes>
  )
}

export default RouteManger;