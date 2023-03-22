import React from 'react'

export default function Auto(props) {
    const click = () => {
        props.setSearchAuto(props.val.LocalizedName);
        props.setSearch(props.val.LocalizedName);
        props.setServerFlag(!props.serverFlag)
        props.dataSet('');
    }
    return (
        <div className='auto' onClick={() => { click() }}>
            <p className='p1'>{props.val.LocalizedName}</p>
        </div>
    )
}
