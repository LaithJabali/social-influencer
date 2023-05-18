import React from 'react'
import Style from './Signs.module.css';

const SignTitle = ({title}) => {
  return (
    <h1 className={Style.title}>{title}</h1>
  )
}

export default SignTitle