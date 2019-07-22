import React from 'react';
import { Link } from "react-router-dom";



const NavWrapper = () => {
    return (
      <div>
        <div className="App">
          <div className="Nav">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt = "apple"/></Link>
          </div>
          <div className="Nav">
            <Link to="/">Mac</Link>
          </div>
          <div className="Nav">
            <Link to="/">iPad</Link>
          </div>
          <div className="Nav">
            <Link to="/">iPhone</Link>
          </div>
          <div className="Nav">
            <Link to="/">Watch</Link>
          </div>
          <div className="Nav">
            <Link to="/">TV</Link>
          </div>
          <div className="Nav">
            <Link to="/">Music</Link>
          </div>
          <div className="Nav">
            <Link to="/">Support</Link>
          </div>
          <div className="Nav">
            <Link to="/"> <img src="https://image.flaticon.com/icons/svg/126/126474.svg" alt="search"/></Link>
          </div>
          <div className="Nav">
            <Link to="/"> <img src="https://image.flaticon.com/icons/svg/481/481382.svg" alt="bag"/></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavWrapper;