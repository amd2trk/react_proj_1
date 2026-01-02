import React from 'react'
import { NavLink } from 'react-router-dom'
import css from '../Home/Home.module.css'


export default function Navbar() {
  return (
    <div className='bg-slate-700 sticky top-0 z-50 start-0 end-0 flex align-middle justify-around text-white py-5 font-bold'>
      <NavLink className='text-lg'to="" >START FRAMEWORK</NavLink>
      <ul className='flex'>
        <li><NavLink className= {({ isActive }) => 
        isActive ? `p-2 text-s ${css.bg} rounded-md` : "p-2 text-s" } to="about">ABOUT</NavLink></li>
        <li><NavLink className= {({ isActive }) => 
        isActive ? `p-2 text-s ${css.bg} rounded-md` : "p-2 text-s" } to="portfolio">PORTFOLIO</NavLink></li>
        <li><NavLink className= {({ isActive }) => 
        isActive ? `p-2 text-s ${css.bg} rounded-md` : "p-2 text-s" } to="contact">CONTACT</NavLink></li>
      </ul>
    </div>
  )
}
