import { useState, useEffect, createContext } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import NavBarResponsive from './NavBarResponsive';
import FooterNavBarResponsive from '../Footer/FooterNavBarResponsive';
import { buttons } from './data';

export const NavContext = createContext();

const NavBar = ({ navLinks, isFooter }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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
      <NavContext.Provider value={{ navLinks, buttons }}>
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
