import React from 'react'

function Langing() {
  return (
    <div className='w-full h-screen -z-20 relative'>
        <img
            className='w-full h-full bg-cover -z-20' 
            src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        {/* Container with shop button */}
        <div className='absolute bg-gray-700 w-full h-full flex justify-center items-center top-0 gap-5 bg-opacity-40'>
            <button className='bg-white min-w-fit p-5 rounded-sm hover:scale-110 duration-300' >
              SignIn Now
            </button>
            <button className=' bg-white min-w-fit min-h-fit p-5 rounded-sm hover:scale-110 duration-300'>
              Shop Now
            </button>
        </div>
    </div>
  )
}

export default Langing