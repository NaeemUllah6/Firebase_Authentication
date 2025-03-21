import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import Header from './header'

const Dashboard_Layout = () => {
  return (
    <>
      <div className='flex w-full'>
        <div>
          <Sidebar />
        </div>
        <div className='w-full lg:w-[calc(100%-240px)] ms-auto'>
          <div>
            <Header />
          </div>
          <div className='mt-20 z-0'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard_Layout