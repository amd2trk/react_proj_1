import React from 'react'
import css from '../Home/Home.module.css'


export default function About() {
  return (
    <>
    <div className= {`flex flex-col items-center justify-center  text-white ${css.bg}  gap-3 p-20 min-h-screen`} >
          <h2 className='text-2xl capitalize font-bold'>about component</h2>
            <div>
              <div className='border-t-2 w-16 h-2  inline-block '></div>
              <i className="fa-solid fa-star mx-2 text-white text-md"></i>
              <div className='border-t-2 w-16 h-2  inline-block '></div>      
            </div>
            <div className='grid grid-cols-2 m-40 mt-10'>
              <div>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </div>
              <div>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </div>
              
            </div>
        </div>
       </>
  )
}
