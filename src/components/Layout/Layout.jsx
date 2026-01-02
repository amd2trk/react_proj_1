import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <div className='flex-1'>
            <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
