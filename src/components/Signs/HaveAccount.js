import React from 'react';
import Style from './Signs.module.css';
import MyLink from './MyLink';

const HaveAccount = ({ DoU, Sign }) => {
  return (
    <div className={Style.signUpLink}>
      {DoU}
      <MyLink Links={Sign} />
    </div>
  );
};

export default HaveAccount;
