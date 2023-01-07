import React from 'react'

function Card() {
  return (
      <div className='min-w-[32%] snap-start '>
        <div className='relative w-full'>
        <img 
        className='relative w-full '
        src="https://cdn.shopify.com/s/files/1/0287/3670/products/WMNSLONGBISONLINERJACKET_FORESTFLOOR_204-053-34324_2470.jpg?v=1668634328&width=360" alt="" />
        <p className='absolute bottom-3 left-3 bg-cyan-900 text-white px-3 py-1 rounded-full text-sm'>
          sale
        </p>
        </div>
      <div className='py-4 px-6'>
        {/* code */}
        <span className='text-sm text-red-600 '>Extra 50% Off w/ Code: EXTRA50</span>
        {/* title */}
        <h6 className='text-md font-bold'>
          Recycled Sherpa Flannel-Lined Jacket
        </h6>
        {/* Prices */}
        <div className='flex gap-4 px-4 py-2'>
          <p><del>200</del> $ </p>
          <p>100 $</p>
        </div>
        {/* colors */}
        <div>
          <label className='relative w-6 h-6 block bg-teal-700 rounded-full p-1' >
          </label>
        </div>
      </div>
      </div>  
      )
}

export default Card