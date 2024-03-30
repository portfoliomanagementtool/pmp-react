import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer h-16 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between w-full">
        <span>Copyright @ 2023 <span className="semi-bold">PMP</span> All rights reserved.</span>
        <div>
          <Link to="#" className='text-gray'>Terms & Conditions</Link>
          <span className="mx-2 text-muted"></span>
          <Link to="#" className='text-gray'>Privacy & Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;