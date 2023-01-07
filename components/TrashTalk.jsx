import React from 'react'

function TrashTalk() {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-screen absolute top-0 left-0 -z-20 ' 
        src="//cdn.shopify.com/s/files/1/0287/3670/files/AdobeStock_10198280_2.jpg?v=1661369229&width=3000" alt="" />

        <div className='w-full h-screen flex flex-col justify-center items-center bg-opacity-40 top-0 bg-gray-700'>
            <h5 className='font-bold w-full text-center text-white text-4xl mb-4'>Trash Talk</h5>
            <p className='text-md font-normal w-full text-center px-5 text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque rerum quos, eius accusamus aperiam voluptatem velit, nesciunt aliquid natus adipisci perspiciatis unde, quae pariatur possimus laborum quaerat ab fugiat veritatis.
            </p>
        </div>
    </div>
  )
}

export default TrashTalk