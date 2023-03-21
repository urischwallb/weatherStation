import React from 'react'

export default function Auto(props) {
    return (
        <div onClick={() => { props.setSearchAuto(props.val.LocalizedName) /* alert(`you click - ${props.val.LocalizedName}`) */ }}>
            <p style={{background:'gray'}}>{props.val.LocalizedName}</p>
        </div>
    )
}
