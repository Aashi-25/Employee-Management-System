import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
    if (!data || !data.tasks) {
        return <div>Loading tasks...</div>;
    }
    return (
        <div id='tasklist' className='overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5'>
            {data.tasks.map((elem , index) => (
                <React.Fragment key = {index} >
                    {elem.active && <AcceptTask data={elem} />}
                    {elem.newTask && <NewTask data={elem} />}
                    {elem.completed && <CompleteTask data={elem} />}
                    {elem.failed && <FailedTask data={elem} />}
                </React.Fragment>
            ))} 

        </div>
    )
}

export default TaskList;