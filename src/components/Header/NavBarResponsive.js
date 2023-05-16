import React from 'react';
import { useContext } from 'react';
import MyMenu from './MyMenu';
import { Dropdown } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import style from './Header.module.css';
import { NavContext } from './NavBar';

const NavBarResponsive = () => {
  const { navLinks, buttons } = useContext(NavContext);
  const menu = (<MyMenu navLinks={navLinks} buttons={buttons} />);
  return (
    <Dropdown overlay={menu} placement='bottomLeft' className={style.dropdown}>
      <a href='/' onClick={e => e.preventDefault()}>
        <BarsOutlined />
      </a>
    </Dropdown>
  );
};

export default NavBarResponsive;
