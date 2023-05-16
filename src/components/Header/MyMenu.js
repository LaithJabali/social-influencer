import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { NavContext } from './NavBar'

const MyMenu = () => {
  const { navLinks, buttons } = useContext(NavContext);

  return (
    <Menu>
    {navLinks.map(({ to, text }) => (
      <Menu.Item key={to}>
        <NavLink to={to}>{text}</NavLink>
      </Menu.Item>
    ))}
    {buttons.map(({ url, content }) => (
      <Menu.Item key={url}>
        <NavLink to={url}>{content}</NavLink>
      </Menu.Item>
    ))}
  </Menu>
  )
}
export default MyMenu