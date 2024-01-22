import { LogIn, Register, LandingPage, Dashboard, Portfolio, Assets, EditAsset, Analytics, Profile } from './pages/pages';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import DashboardLayout from './components/layouts/DashboardLayout';
import ViewAsset from './pages/Assets/components/ViewAsset';
import Watchlist from './pages/Watchlist/Watchlist';
import Orders from './pages/Reports/components/Orders';
import Positions from './pages/Reports/components/Positions';

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
        path: 'asset/edit',
        element: <EditAsset />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path:'watchlist',
        element:<Watchlist/>
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
      },
      {
        path: 'reports/orders',
        element:<Orders/>
      },
      {
        path: 'reports/positions',
        element: <Positions/>
      }
    ]
  },
];

export default routes;