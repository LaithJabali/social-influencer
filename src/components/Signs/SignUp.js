import React from 'react';
import { formItemsSignUp, buttons, SignIn, Rules } from './data';
import Sign from './Sign';

const SignUp = () => {
  return (
    <Sign
      title="Sign Up"
      formItems={formItemsSignUp}
      buttons={buttons}
      ForgotLink={Rules}
      haveAccount="Already have an account? "
      sign={SignIn}
    />
  );
};

export default SignUp;
