import React from 'react'
import './Iconswitch.css'

export default function Iconswitch(props) {
    const { icon, onSwitch } = props
    return (
        <div className='iconswitch'>
            <span className='material-icons icon' onClick={onSwitch}>
                {icon}
            </span>
        </div>
    )
}
