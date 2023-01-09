import React from 'react'
import {ArrowLongRightIcon} from '@heroicons/react/24/outline'
function BestSellingBags() {
  return (
    <div  className='container mx-auto '>
        <h3 className='text-2xl font-bold my-5'>Best Selling Bags</h3>
        <div className='w-full grid grid-cols-3 grid-rows-2'>
            {/* first */}
            <div className='col-span-2 row-span-2 h-full'>
              <div className='w-full'>
                <img
                className='h-full w-full' 
                src="https://cdn.shopify.com/s/files/1/0287/3670/products/9l_sidekick_814-152-378130021.jpg?v=1670270323&width=750" alt="" />
              </div>
              <div className='w-full flex justify-between items-center '>
                <p className='text-xl font-bold'>DeadStock Revolution</p>
                <ArrowLongRightIcon className='w-8' />
              </div>
            </div>
            {/* Second */}
            <div className='row-span-1 h-full bg-slate-800'>
              <div className='w-full'>
            <img
                className='h-full w-full' 
                src="https://cdn.shopify.com/s/files/1/0287/3670/products/S22_Accessories-228.jpg?v=1672847461&width=750" alt="" />
              </div>
              <div className='w-full flex justify-between items-center '>
                <p className='text-xl font-bold'>DeadStock Revolution</p>
                <ArrowLongRightIcon className='w-8' />
            </div>

            </div>
            {/* third */}
            <div className='row-span-1 h-full bg-slate-800'>
              <div className='w-full'>
            <img
                className='h-full w-full' 
                src="https://cdn.shopify.com/s/files/1/0287/3670/products/S22_Accessories-228.jpg?v=1672847461&width=750" alt="" />
              </div>
              <div className='w-full flex justify-between items-center '>
                <p className='text-xl font-bold'>DeadStock Revolution</p>
                <ArrowLongRightIcon className='w-8' />
            </div>
            </div>
        
        </div>
    </div>
  )
}

export default BestSellingBags