import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router';

export default ({children}) => (
  <div className="flexcontainer">
    <Link to="/home" className="homelink"><h1>react + redux + d3</h1></Link>
    <Nav />
    {children}
  </div>
)
