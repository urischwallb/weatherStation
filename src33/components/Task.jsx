import React from 'react'
import { useState } from 'react'
import Details from './Details'

export default function Task(props) {
    const[details,setDetails] = useState(false)
    const showdetails = ()=>{
        if (details == true) {
            return <Details name={props.name} desc ={ props.desc}/>
        }

    }

  return (
    <div  onClick={()=>{setDetails(!details)}} style={{display:'flex',justifyContent:"space-around",border: "1px black solid"}}>
       <h1>{props.name}</h1> 
       <h2>{props.worker}</h2> 
       {showdetails()}

    </div>
  )
}
