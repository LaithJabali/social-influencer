import React from 'react'
import style from './Header.module.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HeaderButtons = () => {
  return (
    <div className={style.buttonsBox}>
      <Link to={"/SignIn"}>
        <Button type='text' className={style.signButton}>Log In</Button>
      </Link>
      <Link to={'./SignUp'}>
        <Button type='primary' className={style.signButton}>Sign Up</Button>
      </Link>
    </div>
  )
}

export default HeaderButtons