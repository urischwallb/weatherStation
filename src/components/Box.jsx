import React from 'react'

export default function Box(props) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',border:"solid 1px black",width:'100px',height:'75px'}}>
        {props.data.city}
        {props.data.day}<br/>
        {props.data.temp}°C<br/>
    </div>
  )
}
