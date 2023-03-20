import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Signin(props) {
    
const nev = useNavigate();

const vilidUser =()=>{
    //check in db
    props.next(true)
    nev('/alltasks')
}

  return (
    <div>
        <input type="text"  /><br/>
        <input type="text" /><br/>
        <button onClick={vilidUser}>enter</button>
    </div>
  )
}
