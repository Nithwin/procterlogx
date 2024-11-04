import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have this import for Link
import './Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg pt-3 fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" >
          <ul className=" btns">
            <li className="nav-item">
              <Link className="nav-link header-btn" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-btn" to="/about">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-btn" to="/contact">Attendance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-btn" to="/contact">Drive</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-btn" to="/contact">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
