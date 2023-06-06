import React from 'react'
import Home from './Home';
import Trade from './Trade';
import Dash from './Dash';
import CopyTrading from './CopyTrading';

const Render = ({ page, setPage }) => {
    


    const location = window.location.pathname

  return (
    <div className="w-full h-full bg-bg scroll-y">
      {location === "/" && <Home page={page} setPage={setPage} />}
      {location === "/trade" && <Trade page={page} setPage={setPage} />}
      {location === "/dash" && <Dash page={page} setPage={setPage} />}
      {location === "/copytrading" && <CopyTrading page={page} setPage={setPage} />}
    </div>
  ); 
}

export default Render; 