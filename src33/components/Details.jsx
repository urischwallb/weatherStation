import React from 'react'
import { useState } from 'react'

export default function Details(props) {


  return (
    <div> 
    <button>x</button>
    <h3>{props.name}</h3>
    <h3>{props.desc}</h3>
    <button>finish</button>

    </div>
  )
}
