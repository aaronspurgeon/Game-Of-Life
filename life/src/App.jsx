import React, { useState, useRef, useCallback } from "react";
import './App.css'
import produce from 'immer'
import { wasteland, glider, smallExploder, exploder, tenCell, spaceship, operations, random } from './Components/presets'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { GiPauseButton, GiPlayButton } from 'react-icons/gi';


const numRows = 50;
const numCols = 50;



const options = [
  "Wasteland", "Glider", "Small Exploder", "Exploder", "Ten Cell", "Spaceship", "Random"
]



function App() {

  const [grid, setGrid] = useState(() => {
    return wasteland;
  })

  const handleChange = (e) => {
    if (e.value === 'Wasteland') {
      setGrid(wasteland)
    } else if (e.value === 'Glider') {
      setGrid(glider)
    } else if (e.value === 'Small Exploder') {
      setGrid(smallExploder)
    } else if (e.value === 'Exploder') {
      setGrid(exploder)
    } else if (e.value === 'Ten Cell') {
      setGrid(tenCell)
    } else if (e.value === 'Spaceship') {
      setGrid(spaceship)
    } else if (e.value === 'Random') {
      setGrid(random)
    }
  }




  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;


  const runGame = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });


            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      })
    });

    setTimeout(runGame, 100);
  }, [])



  return (
    <>
      <h1>React to Life</h1>
      <div className='container'>
        <div className="grid-container">
          <div
            style={{
              gridTemplateColumns: `repeat(${numCols}, 20px)`, display: 'grid'
            }}
            className='grid'
          >
            {grid.map((rows, i) =>
              rows.map((col, k) => (
                <div
                  className='cell'
                  key={`${i}-${k}`}
                  onClick={() => {
                    const newGrid = produce(grid, gridCopy => {
                      gridCopy[i][k] = grid[i][k] ? 0 : 1;
                    });
                    setGrid(newGrid);
                    console.log(grid.indexOf(k))
                  }}

                  style={{
                    backgroundColor: grid[i][k] ? "white" : undefined,
                    width: 20,
                    height: 20,
                    border: "solid 0.1px rgba(173, 173, 173, 0.2)"
                  }}
                />
              ))
            )}
          </div>
        </div>
        <div className="rules">
          <form>
            <Dropdown className='preset' options={options} onChange={handleChange} value={'Presets'} placeholder="Select an option" />
          </form>
          <h2>The Rules</h2>
          <h3>For a space that is 'populated'</h3>
          <p>Each cell with one or no neighbors dies, as if by solitude.<br />Each cell with four or more neighbors dies, as if by overpopulation.<br />Each cell with two or three neighbors survives.<br /></p>
          <h3>For a space that is 'empty' or 'unpopulated'</h3>
          <p>Each cell with three neighbors becomes populated.</p>
          <div className="control-panel">
            <button
              className='control'
              onClick={() => {
                setRunning(!running);
                if (!running) {
                  runningRef.current = true;
                  runGame();
                }
              }}
            >
              {running ? <GiPauseButton /> : <GiPlayButton />}
            </button>
            <button
              onClick={() => {
                setGrid(wasteland);
              }}
              className='btn'
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default App;
