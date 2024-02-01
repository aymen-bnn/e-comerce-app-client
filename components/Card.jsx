import React from 'react'

function Card() {
  return (
    <div className='min-w-[46%] md:min-w-[32%] snap-start relative overflow-hidden'>
      <div className='relative w-full h-[430px] group '>
        <img
          className='w-full  h-[400px] group-hover:hidden block'
          src="https://cdn.shopify.com/s/files/1/0287/3670/products/WMNSLONGBISONLINERJACKET_FORESTFLOOR_204-053-34324_2470.jpg?v=1668634328&width=360" alt="" />
        <img
          class="w-full h-[400px] absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-110"
          src="https://cdn.shopify.com/s/files/1/0287/3670/products/WMNSORGANICTERRYINDIGOCHORECOAT_INDIGO_204-051-14524_0350.jpg?v=1677611931&width=360"
          alt="" />
        <span className='absolute text-sm bg-cyan-900 px-2 py-1 rounded-full bottom-3 left-2 font-semibold text-white' >
          sale
        </span>
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