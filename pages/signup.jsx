import React, { useState } from 'react'
import Link from 'next/link'
import { useSignup } from '../hooks/useSignup'
function login() {
    const {signup} = useSignup()

    const [firstname , setFirstName] = useState('')
    const [lastname , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(firstname , lastname , email , password)
      }
  return (
    <div className='flex justify-center items-center '>
            <div className='w-1/2'>
                <form action="" onSubmit={handleSubmit}>
                <h1 className='w-full text-center font-bold'>Signup</h1>
                <div className='w-full mb-3 relative group '>
                    <input 
                    onChange={(e) => setFirstName(e.target.value)}
                    className='bg-white w-full px-2 py-3 border border-gray-700' type="text"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >First Name</label>
                </div>
                <div className='w-full mb-3 relative group '>
                    <input 
                    onChange={(e) => setLastName(e.target.value)}
                    className='bg-white w-full px-2 py-3 border border-gray-700' type="text"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Last Name</label>
                </div>                
                <div className='w-full mb-3 relative group '>
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    className='bg-white w-full px-2 py-3 border border-gray-700' type="email"id='customEmail'/>
                    <label htmlFor="" for="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Email</label>
                </div>
                <div className='w-full mb-3 relative group '>
                <input 
                onChange={(e) => setPassword(e.target.value)}
                className='bg-white w-full px-2 py-3 border border-gray-700' type="password"id='customEmail'/>
                    <label htmlFor="" for="customEmail" 
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Password</label>
                </div>
                <div className='flex justify-center items-center'>
                     <button 
                     onClick={handleSubmit}
                     className='font-bold border border-gray-800 bg-slate-800 hover:bg-white hover:text-gray-800 text-white py-3 px-4'>Create</button>
                </div>
                </form>
            </div>
    </div>
  )
}

export default login