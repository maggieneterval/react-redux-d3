import React from 'react';
import '../App.css';
import ScatterPlotContainer from '../Containers/ScatterPlotContainer';

export default ({getRandomData}) => (
  <div>
    <h1>React + Redux + D3 = Awesome</h1>
    <ScatterPlotContainer />
    <button onClick={getRandomData}>Random data</button>
  </div>
);