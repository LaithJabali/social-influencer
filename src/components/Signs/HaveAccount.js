import React from 'react';
import Style from './Signs.module.css';
import MyLink from './MyLink';

const HaveAccount = ({ haveAccount, sign }) => {
  return (
    <div className={Style.signUpLink}>
      {haveAccount}
      <MyLink Links={sign} />
    </div>
  );
};

export default HaveAccount;
