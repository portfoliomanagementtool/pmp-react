import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full font-Poppins justify-between px-5 flex py-5 bg-white/60'>
      <h1 className='font-semibold text-xl'>Hello, Kunal</h1>
      <UserButton/>
    </div>
  )
}

export default Navbar
