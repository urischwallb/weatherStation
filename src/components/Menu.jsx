import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
  const nev = useNavigate();


  return (
    <div>
      <button onClick={()=>{nev('/')}}>Home</button>
      <button onClick={()=>{nev('/favorites')}}>Favorites</button>
      <hr/>
    </div>
  )
}
