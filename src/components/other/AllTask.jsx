import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext);
    console.log(authData.employees);
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 font-medium text-lg'>Completed</h5>
                <h5 className='w-1/5 text-lg  font-medium' >Failed</h5>
            </div>

            <div id='allTask' className='h-[80%]'>
                {authData.employees.map(function (elem) {
                    return <div className='border-2 font-medium border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='w-1/5 text-lg font-medium text-white-600'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-lg font-medium text-blue-600'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 font-medium text-lg text-white-600'>{elem.taskCounts.completed}</h5>

                        <h5 className='w-1/5 text-lg  font-medium text-red-600'>{elem.taskCounts.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask;