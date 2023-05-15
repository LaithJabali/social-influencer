import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({navLinks}) => {
  return (
    <nav>
      <ul>
        {navLinks.map(({ to, text }) => (
          <li key={to}>
            <NavLink to={to}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

