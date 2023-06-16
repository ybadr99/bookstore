import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1 className="logo">Bookstore CMS</h1>
    <ul>
      <Link to="/" className="nav-item active">
        Home
      </Link>
      <Link to="/categories" className="nav-item">
        Categories
      </Link>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">person</span>
    </button>
  </nav>
);

export default Navbar;
