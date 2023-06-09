import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="container">
      <h1>Bookstore</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </ul>
    </div>
  </nav>
);

export default Navbar;
