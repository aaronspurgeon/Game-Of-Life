import React, { useState } from 'react'
import './Grid.scss';

export default function Cell({ onClick, index }) {
    const [name, setName] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        setName(false)
    }
    return (
        <div className={name ? 'cell off' : 'cell on'} onClick={handleClick}>

        </div >
    )
}
