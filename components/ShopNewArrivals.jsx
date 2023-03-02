import React from 'react'
import Card from './Card'
function ShopNewArrivals() {
  return (
    /*Cards Container*/
    <div className='container mx-auto w-full my-8'>
      <div className='flex justify-between items-center px-5'>
        <h3 className='text-2xl font-bold md:text-4xl py-7'>Shop New Arrivals</h3>
        <a href="new" 
        className='relative text-sm font-medium after:conten-[""] after:w-full overflow-hidden
        after:h-full after:bg-black after:absolute after:left-0 after:-translate-y-[19px]
        after:hover:transition after:hover:delay-300 after:hover:ease-in-out after:hover:top-0
        transition after:hover:translate-y-0 hover:text-white z-10 after:-z-10'>VIEW ALL </a>
      </div>
        <div className='w-full flex overflow-x-scroll scroll-smooth 
        snap-mandatory snap-y md:flex-wrap gap-2'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>

    </div>
  )
}

export default ShopNewArrivals