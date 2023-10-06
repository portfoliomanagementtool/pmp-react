import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full font-Poppins justify-between px-5 flex py-5 bg-darkPurple/90'>
      <h1 className='font-semibold text-xl text-white'>Hello, Kunal</h1>
      <UserButton/>
    </div>
  )
}

export default Navbar
