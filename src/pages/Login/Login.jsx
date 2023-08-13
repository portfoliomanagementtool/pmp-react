import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LogIn = () => {
  return (
    <section id='login'>
      <main className='h-screen w-screen relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <SignIn />
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-1/2 h-screen bg-violet-800'></div>
          <div className='w-1/2 h-screen bg-white'></div>
        </div>
      </main>
    </section>
  );
}

export default LogIn;