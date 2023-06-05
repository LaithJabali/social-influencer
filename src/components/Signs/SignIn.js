import React from 'react';
import { formItems, buttons, ForgotLink, SignUp } from './data';
import Sign from './Sign';
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useReducer } from 'react';
import routes from '../pages/routes';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const SignIn = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { email, password } = state;

  const onChange = (event, field) => {
    dispatch({ type: `SET_${field.toUpperCase()}`, payload: event.target.value });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate(routes.HomePage);
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