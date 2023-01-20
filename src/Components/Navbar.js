import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <Link className="app__title" to="/">
      Math Magicians
    </Link>

    <nav>
      <Link className="nav__item" to="/">
        Home
      </Link>
      <Link className="nav__item" to="/calculator">
        Calculator
      </Link>
      <Link className="nav__item" to="/quote">
        Quote
      </Link>
    </nav>
  </header>
);

export default Navbar;
