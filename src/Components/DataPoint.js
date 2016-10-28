import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export default class DataPoint extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      cx: props.xScale(props.datum[0]),
      cy: props.yScale(props.datum[1])
    }
  }

  transition = d3.transition().duration(750);
 
  componentWillReceiveProps(nextProps) {
    const {datum, xScale, yScale} = nextProps;
    let node = d3.select(ReactDOM.findDOMNode(this));
    node.transition(this.transition)
        .attr('cx', xScale(datum[0]))
        .attr('cy', yScale(datum[1]))
        .on('end', () => {
          this.setState({cx: xScale(datum[0]), cy: yScale(datum[1])});
        });
  }

  render () {
    const {datum, xScale, yScale} = this.props;
    return (
      <circle
        cx={this.state.cx}
        cy={this.state.cy}
        r={3}
      />
    )
  }

}
