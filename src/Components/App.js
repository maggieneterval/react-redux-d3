import React from 'react';
import ScatterPlotContainer from '../Containers/ScatterPlotContainer';


export default ({getRandomData, uploadCSV, children}) => (
  <div className="flexcontainer">
    <h1>react + redux + d3</h1>
    {children}
    <div>
      <button onClick={getRandomData}>Get random data</button>
      <input type="file" id="csvFileInput" onChange={uploadCSV} accept=".csv" />
    </div>
  </div>
);