import React from 'react'

export default function Box(props) {
    const btn = () => {
        if (props.data.city != undefined) {
            return <button onClick={() => {
                props.arr.splice(props.data.id, 1)
                props.set([...props.arr])
            }}>x</button>
        } else {
            return null
        }
    }
    return (
        <div style={{ backgroundColor: 'honeydew',borderRadius:"20px", display: 'flex', flexDirection: 'column', alignItems: 'center',
         justifyContent: 'space-evenly', border: "solid 1px black", width: '100px', height: '100px' }}>
            {btn()}
            {props.data.city}
            {props.data.day}<br />
            {props.data.temp}°C<br />
        </div>
    )
}
