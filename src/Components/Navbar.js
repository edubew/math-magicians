import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive__nav');
  };

  return (
    <header>
      <Link className="app__title" to="/">
        Math Magicians
      </Link>

      <nav ref={navRef}>
        <Link className="nav__item" to="/">
          Home
        </Link>
        <Link className="nav__item" to="/calculator">
          Calculator
        </Link>
        <Link className="nav__item" to="/quote">
          Quote
        </Link>
        <button
          type="submit"
          onClick={showNavbar}
          className="nav__btn close__btn"
        >
          <FaTimes />
        </button>
      </nav>
      <button type="submit" onClick={showNavbar} className="nav__btn">
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
