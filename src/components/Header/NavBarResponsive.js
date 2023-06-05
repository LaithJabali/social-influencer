import React from 'react';
import MyMenu from './MyMenu';
import { Dropdown } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import style from './Header.module.css';

const NavBarResponsive = () => {
  const menu = (<MyMenu />);
  return (
    <Dropdown overlay={menu} placement='bottomLeft' className={style.dropdown}>
      <a href='/' onClick={e => e.preventDefault()}>
        <BarsOutlined />
      </a>
    </Dropdown>
  );
};

export default NavBarResponsive;