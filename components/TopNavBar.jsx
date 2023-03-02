import React from 'react'
import {useLogout} from "../hooks/useLogout"
function TopNavBar() {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }
  return ( 
        <div className='w-full sticky flex items-center justify-center bg-cyan-900'>
            <div className='flex-1'>
                <button 
                onClick={handleClick}
                className='text-white cursor-pointer hover:font-semibolds md:block hidden'>
                    logout
                </button>
            </div>
            <div className='flex-1 text-center text-white '>
                <p className='text-[12px] p-2 italic font-semibold'>Free shipping on DZ orders 15000 da & Free exchanges</p>
            </div>
            <div className='flex-1 text-center bg-gradient-to-r from-cyan-900 to-cyan-300 h-full' >
                <p className='text-[10px] p-2 text-white font-semibold'>4.535.532 Lb OF TRUSH REMOVED</p>
            </div>
        </div>
  )
}

export default TopNavBar