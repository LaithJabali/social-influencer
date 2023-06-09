import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import style from '../Header/Header.module.css';
import { NavContext } from '../Header/NavBar';
import { useContext } from 'react';

const FooterNavBarResponsive = () => {
const { navLinks } = useContext(NavContext);
return (
    <Menu mode="inline" className={style.headerNav}>
        {navLinks.map(({ to, text }) => (
            <Menu.Item key={to}>
                <NavLink to={to}>{text}</NavLink>
            </Menu.Item>
        ))}
    </Menu>
  )
}

export default FooterNavBarResponsive