import React from 'react'
import style from './Header.module.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const HeaderButtons = () => {
  const buttons = [
    {
      url:'/SignIn',
      content: 'Log In',
      buttonType: 'text'
    },
    {
      url:'/SignUp',
      content: 'Sign Up',
      buttonType: 'primary'
    }
  ].map(({url,content,buttonType}) => {
    return(
      <>
        <Link key={url} to={url}>
          <Button type={buttonType} className={style.signButton}>{content}</Button>
        </Link>
      </>
    )
  }); 
  return (
    <div className={style.buttonBox}>
        {buttons}
    </div>
  )
}

export default HeaderButtons