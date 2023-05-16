import React from 'react'
import style from './Header/Header.module.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';


const HeaderButtons = ({buttons,buttonClass,buttonShape}) => {
  const renderedButtons = buttons.map(({url,content,buttonType}) => {
    return(
      <Link key={url} to={url}>
        <Button type={buttonType} className={buttonClass} shape={buttonShape}>{content}</Button>
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