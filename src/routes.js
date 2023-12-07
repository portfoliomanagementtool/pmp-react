import { LogIn, Register, LandingPage, Dashboard, Portfolio, Assets, Analytics } from './pages/pages';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import DashboardLayout from './components/layouts/DashboardLayout';

const routes = [
  {
    path: '/sign-in',
    element: <LogIn />
  },
  {
    path: '/sign-up',
    element: <Register /> 
  },
  {
    path: '/',
    element: <LandingPage /> 
  },
  {
    path: '/app',
    exact: true,
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <>
          <SignedIn>
            <Dashboard />
          </SignedIn>
          <SignedOut>
            <LandingPage />
          </SignedOut>
        </>
      },
      {
        path: 'portfolio',
        element: <>
          <SignedIn>
            <Portfolio />
          </SignedIn>
          <SignedOut>
            <LandingPage />
          </SignedOut>
        </>
      },
      {
        path: 'assets',
        element: <>
          <SignedIn>
            <Assets />
          </SignedIn>
          <SignedOut>
            <LandingPage />
          </SignedOut>
        </>
      },
      {
        path: 'analytics',
        element: <>
          <SignedIn>
            <Analytics />
          </SignedIn>
          <SignedOut>
            <LandingPage />
          </SignedOut>
        </>
      }
    ]
  },
];

export default routes;