import React, { useState } from 'react'
import './Grid.scss';

export default function Cell({ onClick, index, cell }) {
    const [name, setName] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        cell = !cell
        setName(!name)
        console.log(`cell at index: ${index} is ${cell}`)
    }


    return (

        <div className={name ? 'cell off' : 'cell on'} onClick={handleClick}>

        </div >
    )
}
