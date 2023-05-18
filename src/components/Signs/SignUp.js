import React from 'react';
import Style from './Signs.module.css';
import SignTitle from './SignTitle';
import SignForm from './SignForm';
import { formItemsSignUp, buttons, SignIn, Rules } from './data';
import HaveAccount from './HaveAccount';

const SignUp = () => {
  return (
    <div className={`${Style.container} ${Style.signUpContainer}`}>
      <div className={Style.contentBox}>
        <SignTitle title={'Sign Up'} />
        <SignForm formItems={formItemsSignUp} buttons={buttons} ForgotLink={Rules} />
        <HaveAccount DoU={'Already have an account? '} Sign={SignIn} />
      </div>
    </div>
  );
};

export default SignUp;
