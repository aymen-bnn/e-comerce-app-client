import React from 'react'

function Card() {
  return (
      <div className='min-w-[46%] md:min-w-[32%] snap-start '>
        <div className='relative w-full h-[400px]
        bg-[url("https://cdn.shopify.com/s/files/1/0287/3670/products/104-063-14525_indigo_6464_6a2f8a75-ac50-4668-8d93-1adc1c0ea152.jpg?v=1677611931&width=360")] '>
          <img 
          className='w-full  h-[400px]'
          src="https://cdn.shopify.com/s/files/1/0287/3670/products/WMNSLONGBISONLINERJACKET_FORESTFLOOR_204-053-34324_2470.jpg?v=1668634328&width=360" alt="" />
          <p className='absolute bottom-3 left-3 bg-cyan-900 text-white px-3 py-1 rounded-full text-sm'>
            sale
          </p>
        </div>
      <div className='py-4 px-6'>
        {/* title */}
        <h6 className=' text-gray-900 font-serif font-medium'>
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