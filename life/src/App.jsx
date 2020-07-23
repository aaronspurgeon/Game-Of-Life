import React from "react";
import Grid from './Components/Grid/Grid'
import './App.css'
import { someAlgo } from './algo/algo'
import data from './data'

function App() {
  someAlgo('alive', data)
  return <div className="App">
    <h1>React Game of Life</h1>
    <Grid />
  </div>;
}

export default App;
