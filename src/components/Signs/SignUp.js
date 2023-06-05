import React, { useReducer } from 'react';
import { formItemsSignUp, buttons, SignIn, Rules } from './data';
import { useNavigate } from 'react-router-dom';
import Sign from './Sign';
import { auth } from '../config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import routes from '../pages/routes';

const initialState = {
  username: '',
  email: '',
  password: '',
  phoneNumber: '',
  dateOfBirth: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_PHONENUMBER':
      return { ...state, phoneNumber: action.payload };
    case 'SET_DATEOFBIRTH':
      return { ...state, dateOfBirth: action.payload };
    default:
      return state;
  }
};

const SignUp = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { username, email, password, phoneNumber, dateOfBirth } = state;

  const db = getFirestore();
  const usersCollectionRef = collection(db, 'users');

  const onChange = (event, field) => {
    dispatch({ type: `SET_${field.toUpperCase()}`, payload: event.target.value });
  };

  const createUser = async (userData) => {
    try {
      const docRef = await addDoc(usersCollectionRef, userData);
      console.log('Document written  ID:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: username })
          .then(() => {
            const userData = {
              username: username,
              email: email,
              password: password,
              phoneNumber: phoneNumber, 
              dateOfBirth: dateOfBirth, 
            };
            createUser(userData);
            navigate(routes.HomePage);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Sign
      title="Sign Up"
      formItems={formItemsSignUp.map((item) => ({
        ...item,
        onChange: (event) => onChange(event, item.name),
      }))}
      buttons={buttons.map((item) => ({
        ...item,
        buttonOnClick: signUp,
      }))}
      ForgotLink={Rules}
      haveAccount="Already have an account? "
      sign={SignIn}
    />
  );
};

export default SignUp;
