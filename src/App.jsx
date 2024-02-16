import { dark } from '@clerk/themes';
import { BrowserRouter, Routes, Route, useNavigate, useRoutes } from "react-router-dom";
import { LogIn, Register, LandingPage, Dashboard } from './pages/pages';
import './App.css';
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import Portfolio from './pages/Portfolio/Portfolio';
import routes from './routes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllWatchlist } from './api';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  const allPages = useRoutes(routes);

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        // baseTheme: dark
      }}
      navigate={(to) => navigate(to)}
    >
      {allPages}
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
        <Route
          path="/portfolio"
          element={
          <>
            <SignedIn>
              <Portfolio />
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
  const mode = useSelector((state) => state.config.mode);

  useEffect(() => {
    if(mode === "dark") {
      const html = document.querySelector('html');
      html.classList.add('dark');
    } else if (mode === "light") {
      const html = document.querySelector('html');
      html.classList.remove('dark');
    }

    const fetchWatchlist = async () => {
      try {
        const { data } = await getAllWatchlist();
        console.log(data)
        // setWatchlist(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchWatchlist();
  }, [mode])

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}


export default App;