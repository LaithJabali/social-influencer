import React, { useState, useEffect, createContext } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import NavBarResponsive from './NavBarResponsive';
import FooterNavBarResponsive from '../Footer/FooterNavBarResponsive';
import { buttons, logOut } from './data';
import { auth } from '../config';

export const NavContext = createContext();

const NavBar = ({ navLinks, isFooter }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);

  const handleResize = () => setIsMobile(window.innerWidth < 1200);
  const handleLogout = () => auth.signOut();  

  const updatedLogOut = logOut.map((item) => ({
    ...item,
    buttonOnClick: handleLogout,
  }));

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  }, []);

  if (isMobile && isFooter) {
    return (
      <NavContext.Provider value={{ navLinks }}>
        <FooterNavBarResponsive />
      </NavContext.Provider>
    );
  } else if (isMobile && !isFooter) {
    return (
      <NavContext.Provider value={{ navLinks, buttons: user ? updatedLogOut : buttons }}>
        <NavBarResponsive />
      </NavContext.Provider>
    );
  }

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