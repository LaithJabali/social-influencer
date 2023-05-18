import React from 'react';
import Style from './Signs.module.css';
import MyLink from './MyLink';
import {SignUp} from './data'

const HaveAccount = ({ DoU }) => {
  return (
    <div className={Style.signUpLink}>
      {DoU}
      <MyLink Links={SignUp} />
    </div>
  );
};

export default HaveAccount;
