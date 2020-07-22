import React, { useState } from 'react';
import Cell from './Cell'
import './Grid.scss'

export default function Grid() {
    const [toggle, setToggle] = useState(['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off',])
    return (
        <div className='grid'>
            {toggle.map(() => (
                <Cell toggle={toggle} />
            ))}
        </div>
    )
}
