import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask';

const CreateTask = () => {

    //2 way binding
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [task , setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = { taskTitle,taskDescription,taskDate,category, active:false , newTask:true , failed:true ,completed:false };
        setTask(newTask);
    }
  return (
                <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={ (e) => {
                    submitHandler(e);
                }}   
                className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input 
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'type='Date' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input 
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input 
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='design,dev etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea 
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                        className='w-full h-44 text-sm py-2 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    </div>

                    <button className='hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full py-3 bg-emerald-500'>Create Task</button>
                </form>
            </div>
  )
}

export default CreateTask