import React from 'react'
import Home from './Home';
import Trade from './Trade';
import Dash from './Dash';

const Render = ({setPage}) => {

    const location = window.location.pathname

  return (
    <div className="w-full h-full bg-bg scroll-y">
      {location === "/" && <Home setPage={setPage} />}
      {location === "/trade" && <Trade setPage={setPage} />}
      {location === "/dash" && <Dash setPage={setPage} />}
    </div>
  ); 
}

export default Render; 