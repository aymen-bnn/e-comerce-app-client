import React from 'react'

function Langing() {
  return (
    <div className='w-full h-screen z-20 
    relative 
    before:content-[""]
    before:absolute
    before:w-full
    before:h-full
    before:-z-10
    before:bg-black
    before:opacity-30
    bg-cover
    bg-[url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
        {/* Container with shop button */}
        <div className='w-full h-full flex justify-center md:items-end items-center '>
            <button className='px-5 py-4  rounded-sm duration-300
             border-white border-solid border-2 text-white font-semibold md:mb-8 z-20
             hover:bg-white hover:bg-opacity-80 hover:text-black hover:scale-105'>
              Shop Now
            </button>
        </div>
    </div>
  )
}

export default Langing