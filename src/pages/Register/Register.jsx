import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <section id='register'>
      <main className='h-screen w-screen relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <SignUp />
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-1/2 h-screen bg-violet-800'></div>
          <div className='w-1/2 h-screen bg-white'></div>
        </div>
      </main>
    </section>
  )
}

export default Register;