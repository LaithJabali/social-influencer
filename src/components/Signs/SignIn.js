import React from 'react';
import { formItems, buttons, ForgotLink, SignUp } from './data';
import Sign from './Sign';
import { useState } from 'react';
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChange = (event, field) => {
    field === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);
  };  

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/BrowseInfluencers');
      })
      .catch((error) => console.error(error));
  };

  return (
    <Sign
      title="Login"
      formItems={formItems.map((item) => ({
        ...item,
        onChange: (event) => onChange(event, item.name),
      }))}
      buttons={buttons.map((item) => ({
        ...item,
        buttonOnClick: signIn,
      }))}
      ForgotLink={ForgotLink}
      haveAccount="Don’t have an account? "
      sign={SignUp}
    />
  );
};

export default SignIn;