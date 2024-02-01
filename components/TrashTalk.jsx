import React from 'react'

function TrashTalk() {
  return (
    <div className='w-full h-screen relative 
    flex items-center
    bg-cover
    bg-[url("https://images.unsplash.com/photo-1544452963-52b43bbe2b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")]'>

        <div className='w-full flex flex-col justify-center 
        items-center top-0 py-7 
        bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
            <h5 className='font-bold w-full text-center text-white text-4xl mb-4'>Trash Talk</h5>
            <p className='text-md font-normal w-full text-center px-5 text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque rerum quos, eius accusamus aperiam voluptatem velit, nesciunt aliquid natus adipisci perspiciatis unde, quae pariatur possimus laborum quaerat ab fugiat veritatis.
            </p>
        </div>
    </div>
  )
}

export default TrashTalk