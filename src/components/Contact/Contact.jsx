import React from 'react'
import css from '../Home/Home.module.css'


export default function Contact() {
  return (
    <>
      <div class="flex min-h-screen items-center justify-start bg-white">
        <div class="mx-auto w-full max-w-lg">
          <h1 class="text-4xl text-center font-bold text-slate-700 capitalize">CONTACT SECTION</h1>
          <div className='text-slate-700 text-center'>
              <div className='border-t-4 w-14 h-2  inline-block '></div>
              <i className="fa-solid fa-star mx-2  text-sm"></i>
              <div className='border-t-4 w-14 h-2  inline-block '></div>      
            </div>
          <form class="mt-10">
            <input type="hidden" name="" value="" />
            <div class="grid gap-6 ">
              <div class="relative z-0">
                <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-500 peer-focus:dark:text-teal-500">Your name</label>
              </div>
              <div class="relative z-0">
                <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-500 peer-focus:dark:text-teal-500">Your email</label>
              </div>
              <div class="relative z-0">
                <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-500 peer-focus:dark:text-teal-500">Your name</label>
              </div>
              <div class="relative z-0">
                <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-500 peer-focus:dark:text-teal-500">Your name</label>
              </div>
            </div>
            <button type="submit" class={`mt-5 rounded-md  px-5 py-2 text-white ${css.bg}`}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
