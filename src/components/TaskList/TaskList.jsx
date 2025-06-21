import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5'>
            <AcceptTask/>
            <NewTask/>
            <CompleteTask/>
            <FailedTask/>

            {/* <div className='h-full w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5'>
                <div className='flex justify-between'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus expedita eum consequatur, iusto quisquam laboriosam!
                </p>
            </div>
            <div className='h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0 p-5'>
                <div className='flex justify-between'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus expedita eum consequatur, iusto quisquam laboriosam!
                </p>
            </div>
            <div className='h-full w-[300px] bg-green-400 rounded-xl flex-shrink-0 p-5'>
                <div className='flex justify-between'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                <p className='text-sm mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus expedita eum consequatur, iusto quisquam laboriosam!
                </p>
            </div> */}
        </div>
    )
}

export default TaskList;