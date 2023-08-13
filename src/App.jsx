import { dark } from '@clerk/themes';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { LogIn, Register, LandingPage, Dashboard } from './pages/pages';
import './App.css';
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

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
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}


export default App;