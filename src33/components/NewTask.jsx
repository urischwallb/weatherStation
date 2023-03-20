import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export default function NewTask(props) {
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [worker,setWorker] = useState('');
    const nev = useNavigate()

    const addToArr = ()=>{
        props.add(name,desc,worker);
        nev('/alltasks');
    }


  return (
    <div>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='name'/><br/>
        <input onChange={(e)=>{setWorker(e.target.value)}} type="text" placeholder='worker'/><br/>
        <input onChange={(e)=>{setDesc(e.target.value)}} type="text" placeholder='desc'/><br/>
        <button onClick={addToArr}>add</button>
    </div>
  )
}
