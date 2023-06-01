import React from 'react';
import { formItemsSignUp, buttons, SignIn, Rules } from './data';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sign from './Sign';
import { auth } from '../config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const db = getFirestore();
  const usersCollectionRef = collection(db, 'users');

  const onChange = (event, field) => {
    if (field === 'username') setUsername(event.target.value);
    else if (field === 'email') setEmail(event.target.value);
    else if (field === 'password') setPassword(event.target.value);
    else if (field === 'phoneNumber') setPhoneNumber(event.target.value);
    else if (field === 'dateOfBirth') setDateOfBirth(event.target.value);
  };

  const createUser = async (userData) => {
    try {
      const docRef = await addDoc(usersCollectionRef, userData);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
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
            navigate('/');
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