import React from 'react';
import { Link } from "react-router-dom";



const NavWrapper = () => {
    return (
      <div>
        <div className="App">
          <div>
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"/></Link>
          </div>
          <div>
            <Link to="/">Mac</Link>
          </div>
          <div>
            <Link to="/about">iPad</Link>
          </div>
          <div>
            <Link to="/contact">iPhone</Link>
          </div>
          <div>
            <Link to="/contact">Watch</Link>
          </div>
          <div>
            <Link to="/contact">TV</Link>
          </div>
          <div>
            <Link to="/contact">Music</Link>
          </div>
          <div>
            <Link to="/contact">Support</Link>
          </div>
          <div>
            <Link to="/contact"><img src="https://image.flaticon.com/icons/svg/126/126474.svg"/></Link>
          </div>
          <div>
            <Link to="/contact"><img src="https://image.flaticon.com/icons/svg/481/481382.svg"/></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavWrapper;