import React from 'react';

export default ({datum, xScale, yScale}) => {
  return (
    <circle
      cx={xScale(datum[0])}
      cy={yScale(datum[1])}
      r={3}
    />
  )
}
