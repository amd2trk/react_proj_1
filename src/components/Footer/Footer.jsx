import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className=' bottom-0 start-0 end-0'>
      <div className='bg-slate-700  grid grid-cols-3 text-white gap-1 p-6 '>
        <div className='text-center'>
          <h3 className='font-semibold text-md'>LOCATION</h3>
          <ul className='text-xs'>
            <li className='p-2'>2215 John Daniel Drive</li>
            <li className='p-2'>Clark, MO 65243</li>

          </ul>
        </div >
        <div className='text-center'>
          <h3 className='font-semibold text-md'>AROUND THE WEB</h3>
          <ul className='flex justify-center'>
            <li className='border-white rounded-full border-2 m-2 px-1.5 pb-0.5'><i class="fa-brands fa-facebook  text-xs"></i></li>
            <li className='border-white rounded-full border-2 m-2 px-1.5 pb-0.5'><i class="fa-brands fa-twitter  text-xs"></i></li>
            <li className='border-white rounded-full border-2 m-2 px-1.5 pb-0.5'><i class="fa-brands fa-linkedin  text-xs"></i></li>
            <li className='border-white rounded-full border-2 m-2 px-1.5 pb-0.5'><i class="fa-solid fa-globe  text-xs"></i></li>
          </ul>
        </div>
        <div className='text-center'>
          <h3 className='font-semibold text-md'>ABOUT FREELANCER</h3>
          <p className='text-xs'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      <div className='bg-slate-900 text-white text-center p-3 '>
        Copyright © Your Website 2021
      </div>
    </div>
  )
}
