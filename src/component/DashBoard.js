import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './DashBoard.css';
import Home from './home/Home';
import Cosmetic from './cosmeticproduct/Cosmetic';
import Clothes from './clothes/Clothes';


function DashBoard() {
  return (
 
      <div>
        <nav className='navbar-style'>
          <ul className='nav-item'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Electronics">Electronics</Link></li>
            <li><Link to="/Clothes">Clothes</Link></li>
            <li><Link to="/Cosmetic">Cosmetic Product</Link></li>
          </ul>
          <div className='search'>
            <input type='text' name='search' placeholder='search your product' />
          </div>
        </nav>
     </div>

  );
}

export default DashBoard;
