import React from 'react';
import '../App.css';
import ScatterPlotContainer from '../Containers/ScatterPlotContainer';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia} from 'material-ui/Card';


export default ({getRandomData, uploadCSV}) => (
  <div>
    <h1>react + redux + d3</h1>
    <Card>
      <CardMedia>
        <ScatterPlotContainer />
      </CardMedia>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
        <RaisedButton label="get random data" onClick={getRandomData} />
        <RaisedButton label="upload csv" onClick={uploadCSV} />
        <input type="file" id="csvFileInput" onChange={uploadCSV} accept=".csv" />
      </CardActions>
    </Card>
  </div>
);