import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import NavBarResponsive from './NavBarResponsive';
import FooterNavBarResponsive from '../Footer/FooterNavBarResponsive';
import { buttons } from './data';

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
    return <FooterNavBarResponsive navLinks={navLinks} />;
  } else if (isMobile && !isFooter) {
    return <NavBarResponsive navLinks={navLinks} buttons={buttons} />;
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
