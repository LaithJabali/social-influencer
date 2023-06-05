import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { NavContext } from './NavBar';
import { auth } from '../config';
import Style from './Header.module.css';

const MyMenu = () => {
  const { navLinks, buttons } = useContext(NavContext);
  const user = auth.currentUser;
  
  return (
    <Menu>
      {user && (
        <Menu.Item key="username">
          <h1 className={Style.menuName}>{user.displayName}</h1>
        </Menu.Item>
      )}
      {navLinks.map(({ to, text }) => (
        <Menu.Item key={to}>
          <NavLink to={to}>{text}</NavLink>
        </Menu.Item>
      ))}
      {buttons.map(({ url, content, buttonOnClick }) => (
        <Menu.Item key={url} onClick={buttonOnClick}>
          <NavLink to={url}>{content}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MyMenu;