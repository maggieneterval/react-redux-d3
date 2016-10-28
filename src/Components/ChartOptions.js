import React from 'react';

export default ({chartType, getRandomData, uploadCSV}) => (
  <div>
    <button onClick={() => getRandomData(chartType)}>Get random data</button>
    <input type="file" id="csvFileInput" onChange={uploadCSV} accept=".csv" />
  </div>
)
