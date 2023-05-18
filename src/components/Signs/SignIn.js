import React from 'react';
import Style from './Signs.module.css';
import SignTitle from './SignTitle';
import SignForm from './SignForm';
import HaveAccount from './HaveAccount';

const SignIn = () => {
  return (
    <div className={Style.container}>
      <div className={Style.contentBox}>
        <SignTitle title={'Login'} />
        <SignForm />
        <HaveAccount DoU={'Don’t have an account? '}/>
      </div>
    </div>
  );
};

export default SignIn;
