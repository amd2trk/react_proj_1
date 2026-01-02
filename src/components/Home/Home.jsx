import React from 'react'
import image from '../../assets/avataaars.svg'
import css from './Home.module.css'

export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-center text-white ${css.bg} gap-2 min-h-screen`}>
      <img src={image} alt="" className='w-40 h-40 my-4' />
      <h2 className='text-2xl font-bold'>START FRAMEWORK</h2>
      <div>
        <div className='border-t-2 w-16 h-2 inline-block'></div>
        <i className="fa-solid fa-star mx-2 text-white text-md"></i>
        <div className='border-t-2 w-16 h-2 inline-block'></div>      
      </div>
      <p className='text-xs'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}