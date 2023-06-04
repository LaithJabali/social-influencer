import React from 'react';
import Style from './Signs.module.css';
import SignTitle from './SignTitle';
import SignForm from './SignForm';
import HaveAccount from './HaveAccount';

const Sign = ({ title, formItems, buttons, ForgotLink, haveAccount, sign }) => {
  return (
    <div className={`${Style.container} ${title === 'Login' ? '' : Style.signUpContainer}`}>
      <div className={Style.contentBox}>
        <SignTitle title={title} />
        <SignForm formItems={formItems} buttons={buttons} ForgotLink={ForgotLink} />
        <HaveAccount haveAccount={haveAccount} sign={sign} />
      </div>
    </div>
  );
};

export default Sign;
