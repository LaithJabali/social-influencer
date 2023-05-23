import React from 'react';
import { formItems, buttons, ForgotLink, SignUp } from './data';
import Sign from './Sign';

const SignIn = () => {
  return (
    <Sign
      title="Login"
      formItems={formItems}
      buttons={buttons}
      ForgotLink={ForgotLink}
      haveAccount="Don’t have an account? "
      sign={SignUp}
    />
  );
};

export default SignIn;
