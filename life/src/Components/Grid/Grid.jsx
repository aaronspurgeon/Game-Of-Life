import React, { useState } from 'react';
import Cell from './Cell'
import './Grid.scss'
import data from '../../data'

export default function Grid() {
    const [cell, setCell] = useState(data)



    return (
        <div className='grid'>
            {cell.map((cell, index) => (
                <Cell index={index} key={index} />
            ))}
        </div>
    )
}
