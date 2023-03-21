import React from 'react'

export default function Auto(props) {
    const click = () => {
        props.setSearchAuto(props.val.LocalizedName);
        props.setSearch(props.val.LocalizedName);
        props.setServerFlag(!props.serverFlag)
        props.dataSet('');
    }
    return (
        <div  onClick={() => { click() }}>
            <p style={{ background: 'gray' }}>{props.val.LocalizedName}</p>
        </div>
    )
}
