import React from 'react'
import style from './Header.module.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import {buttons} from './data';

const HeaderButtons = () => {
  const renderedButtons = buttons.map(({url,content,buttonType}) => {
    return(
      <Link key={url} to={url}>
        <Button type={buttonType} className={style.signButton}>{content}</Button>
      </Link>
    )
  }); 
  return (
    <div className={style.buttonBox}>
        {renderedButtons}
    </div>
  )
}

export default HeaderButtons