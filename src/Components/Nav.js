import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="navdiv">
    <ul className="nav">
      <Link to="/scatterplot"><li>scatterplot</li></Link>
      <Link to="/barchart"><li>barchart</li></Link>
    </ul>
  </div>
)
