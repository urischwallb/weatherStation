import React from 'react'
import Task from './Task'

export default function AllTask(props) {




  return (
    <div>
        {props.tasksArr.map((val)=>{
            return <Task name={val.name} worker={val.worker} desc={val.desc}/>;
        }
        )}
    </div>
  )
}
