import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import View from './View';
import { useUser } from '@clerk/clerk-react';

const DashboardLayout = () => {
  const { user } = useUser();

  return (
    <>
      {user && 
        <main>
          <div className='flex flex-auto flex-col'>
            <div className="flex flex-auto min-w-0">
              <SideNav />
              <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                <Header
                  className="shadow dark:shadow-2xl"
                />
                <div className="h-full flex flex-auto flex-col justify-between">
                  <View />
                </div>
              </div>
            </div>
          </div>
        </main>
      }
    </>
  )
}

export default DashboardLayout;