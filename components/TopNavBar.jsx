import React from 'react'
import {useLogout} from "../hooks/useLogout"
function TopNavBar() {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }
  return ( 
        <div className='w-full flex items-center justify-center bg-cyan-900'>
            <div className='flex-1'>
                <button 
                onClick={handleClick}
                className='text-white cursor-pointer hover:font-semibold'>
                    logout
                </button>
            </div>
            <div className='flex-1 text-center text-white '>
                <p className='text-xs p-2 italic'>Free shipping on DZ orders 15000 da & Free exchanges</p>
            </div>
            <div className='flex-1 text-center'>
                <p className='text-xs p-1 text-white'>4.535.532 Lb OF TRUSH REMOVED</p>
            </div>
        </div>
  )
}

export default TopNavBar