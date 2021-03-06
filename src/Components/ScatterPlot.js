import React from 'react';
import * as d3 from 'd3'
import DataPoint from './DataPoint';
import AxisContainer from '../Containers/AxisContainer';
import ChartOptionsContainer from '../Containers/ChartOptionsContainer';

export default class ScatterPlot extends React.Component {

  render () {
    
    const {chartData, chartDimensions} = this.props;
    const {width, height, padding} = chartDimensions;
    const xMax = d3.max(chartData, (d) => d[0]);
    const yMax = d3.max(chartData, (d) => d[1]);

    const xScale = d3.scaleLinear()
      .domain([0, xMax])
      .range([padding, width - padding * 2]);
    
    const yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([height - padding, padding]);
    
    return (
      <div>
        <svg width={width} height={height}>
            {
              chartData.map((datum, index) => (
                <DataPoint
                  key={index}
                  datum={datum}
                  xScale={xScale}
                  yScale={yScale}
                />
              ))
            }
          <AxisContainer orient="x" scale={xScale} />
          <AxisContainer orient="y" scale={yScale} />
        </svg>
        <ChartOptionsContainer chartType="scatterplot"/>
      </div>
    )
  }

}