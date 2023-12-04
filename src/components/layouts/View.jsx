import React from 'react'
import { Outlet } from 'react-router-dom'

const View = () => {
  return (
    <main className='h-full'>
      <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8">
        <Outlet />
      </div>
    </main>
  )
}

export default View