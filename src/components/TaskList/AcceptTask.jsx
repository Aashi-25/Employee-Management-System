import React from 'react'

const AcceptTask = () => {
    return (
        <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus expedita eum consequatur, iusto quisquam laboriosam!
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask