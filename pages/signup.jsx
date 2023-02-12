import React from 'react'
import Link from 'next/link'
function login() {
  return (
    <div className='flex justify-center items-center '>
            <div className='w-1/2'>
                <h1 className='w-full text-center font-bold'>Signup</h1>
                <div className='w-full mb-3 relative group '>
                    <input className='bg-white w-full px-2 py-3 border border-gray-700' type="email"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >First Name</label>
                </div>
                <div className='w-full mb-3 relative group '>
                    <input className='bg-white w-full px-2 py-3 border border-gray-700' type="email"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Last Name</label>
                </div>                
                <div className='w-full mb-3 relative group '>
                    <input className='bg-white w-full px-2 py-3 border border-gray-700' type="email"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Email</label>
                </div>
                <div className='w-full mb-3 relative group '>
                <input className='bg-white w-full px-2 py-3 border border-gray-700' type="email"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Password</label>
                </div>
                <div className='flex justify-center items-center'>
                     <button className='font-bold border border-gray-800 bg-slate-800 hover:bg-white hover:text-gray-800 text-white py-3 px-4'>Create</button>
                </div>
            </div>
    </div>
  )
}

export default login