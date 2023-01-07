import React from 'react'
import Card from './Card'
function ShopNewArrivals() {
  return (
    /*Cards Container*/
    <div className='container mx-auto w-full '>
        <h3 className='font-black text-3xl py-5'>Shop New Arrivals</h3>
        <div className='w-full flex overflow-x-scroll scroll-smooth snap-mandatory snap-y md:flex-wrap gap-2'>
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