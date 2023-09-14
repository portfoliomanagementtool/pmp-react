import { dark } from '@clerk/themes';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { LogIn, Register, LandingPage, Dashboard } from './pages/pages';
import './App.css';
import { 
  ClerkProvider,
  // SignedIn,
  // SignedOut,
  useUser, 
  useAuth
} from "@clerk/clerk-react";
import { useDispatch } from 'react-redux';
import { logIn } from './state/slices/authSlice';
import RouteManger from './RouteManager';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      // appearance={{
      //   baseTheme: dark
      // }}
      navigate={(to) => navigate(to)}
    >
      <RouteManger />
      {/* <Routes>
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
      </Routes> */}
    </ClerkProvider>
  );
}

function App() {
  // const dispatch = useDispatch();
  // const { getToken } = useAuth();
  // const { isLoaded ,isSignedIn, user } = useUser();
  // const [token, setToken] = useState();

  // useEffect(() => {
  //   if(token) {
  //     dispatch(logIn({
  //       user,
  //       token
  //     }));
  //   }
  // }, [user, token, dispatch]);

  // useEffect(() => {
  //   // Function to simulate sleep
  //   function sleep(ms) {
  //     return new Promise(resolve => setTimeout(resolve, ms));
  //   }

  //   const generateToken = async () => {
  //     const token = await getToken();
  //     console.log(token)
  //     setToken(token);
  
  //     await sleep(500);
  //   }

  //   if (isLoaded && isSignedIn) generateToken();
  // }, [getToken, isSignedIn, isLoaded])

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}


export default App;