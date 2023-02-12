import React, { useState } from 'react'
import Link from 'next/link'
import { useSignup } from '../hooks/useSignup'
import { useLogin } from '../hooks/useLogin'
function login() {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const {login , error , isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email , password)
  }
  return (
    <div className='flex justify-center items-center '>
            <div className='sm:w-1/3 w-1/2'>
              <form action="" onSubmit={handleSubmit}>
                <h1 className='w-full text-center font-bold'>Login</h1>

                <div className='w-full mb-3 relative group '>
                    <input 
                    onChange={(e) => {setEmail(e.target.value)}}
                    className='bg-white w-full px-2 py-3 border border-gray-700' type="email"id='customEmail'/>
                    <label htmlFor="customEmail"
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Email</label>
                </div>
                <div className='w-full mb-3 relative group '>
                <input
                onChange={(e) => {setPassword(e.target.value)}} 
                className='bg-white w-full px-2 py-3 border border-gray-700' type="password"id='customEmail'/>
                    <label htmlFor="customEmail" 
                    className='absolute left-0  translate-y-1/2 transition duration-300 ease-in-out group-focus-within:translate-y-0 group-focus-within:scale-75 pl-1 text-gray-600 group-focus-within:text-black'
                    >Password</label>
                <button
                 className='relative before:block before:h-[1px] before:w-full before:bg-slate-700 before:bottom-0 before:absolute before:hover:h-[2px]'>Forget your password?</button>
                </div>
                <div className='flex justify-center items-center'>
                     <button 
                     onClick={handleSubmit}
                     disabled={isLoading}
                     className='font-bold border border-gray-800 bg-slate-800 hover:bg-white hover:text-gray-800 text-white py-3 px-4'>SIGN IN</button>
                     {
                          error && <div className='error'>{error}</div> 
                     }
                </div>
                <div className='flex justify-center items-center'>
                <Link href="/signup">
                    <button className='relative before:block before:h-[1px] before:w-full before:bg-slate-700 before:bottom-0 before:absolute before:hover:h-[2px]'>Create account</button>
                </Link>
                </div>
                </form>
            </div>
    </div>
  )
}

export default login