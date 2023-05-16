import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const NavBar = ({navLinks}) => {
  return (
    <nav className={style.headerNav}>
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

