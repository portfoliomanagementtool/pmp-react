import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full font-Poppins  px-5 py-5 bg-darkPurple/90 fixed'>
      <div className='flex justify-between'>
      <h1 className='font-semibold text-xl text-white'>Hello, Kunal</h1>
      
      <UserButton />
      
      </div>
    </div>
  )
}

export default Navbar
