import React from 'react';
import Style from './Signs.module.css';
import SignTitle from './SignTitle';
import SignForm from './SignForm';
import HaveAccount from './HaveAccount';
import { formItems, buttons, ForgotLink, SignUp } from './data';

const SignIn = () => {
  
  return (
    <div className={Style.container}>
      <div className={Style.contentBox}>
        <SignTitle title={'Login'} />
        <SignForm formItems={formItems} buttons={buttons} ForgotLink={ForgotLink} />
        <HaveAccount DoU={'Don’t have an account? '} Sign={SignUp} />
      </div>
    </div>
  );
};

export default SignIn;
