import { dark } from '@clerk/themes';
import { BrowserRouter, Routes, Route, useNavigate, useRoutes } from "react-router-dom";
import { LogIn, Register, LandingPage, Dashboard } from './pages/pages';
import './App.css';
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import Portfolio from './pages/Portfolio/Portfolio';
import routes from './routes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  }, [mode])

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        theme="light"
        transition={Bounce}
      />
    </BrowserRouter>
  );
}


export default App;