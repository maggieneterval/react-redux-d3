import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const node  = this.refs.axis;
    const axis = this.props.orient === 'x' ? d3.axisBottom(this.props.scale).ticks(5) : d3.axisLeft(this.props.scale).ticks(5);
    d3.select(node).call(axis);
  }

  render() {

    const {orient, chartDimensions} = this.props;
    const {height, padding} = chartDimensions;

    return (
      <g 
        ref="axis" 
        transform={orient === 'x' ? `translate(0, ${height - padding})` : `translate(${padding}, 0)`}
      >
      </g>
    )
  }

}