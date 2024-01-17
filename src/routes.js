import { LogIn, Register, LandingPage, Dashboard, Portfolio, Assets, EditAsset, Analytics, Profile } from './pages/pages';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import DashboardLayout from './components/layouts/DashboardLayout';
import ViewAsset from './pages/Assets/components/ViewAsset';

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
    element: <>
      <SignedIn>
        <DashboardLayout />
      </SignedIn>
      <SignedOut>
        <LandingPage />
      </SignedOut>
    </>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      // {
      //   path: 'assets',
      //   element: <Assets />
      // },
      {
        path: 'asset/all',
        element: <Assets />
      },
      {
        path: 'asset/view',
        element: <ViewAsset />
      },
      {
        path: 'asset/edit/:id',
        element: <EditAsset />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'profile',
        element: <Profile/>
      },
      {
        path: 'settings',
        element: <></>
      },
      {
        path: 'change-password',
        element: <></>
      },
      {
        path: 'logout',
        element: <></>
      }
    ]
  },
];

export default routes;