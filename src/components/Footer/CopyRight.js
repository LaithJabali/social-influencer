import React from 'react'
import { Divider } from 'antd';
import style from './Footer.module.css';

const CopyRight = () => {
  return (
    <>
        <Divider className={style.driver} />
        <p>© infuee 2020 Rights Reserved</p>
    </>
  )
}

export default CopyRight