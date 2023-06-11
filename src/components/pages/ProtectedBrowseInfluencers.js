import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import style from './Pages.module.css';
import { Result } from 'antd';
import { auth } from '../config';

const ProtectedBrowseInfluencers = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const logIn = auth.onAuthStateChanged((user) => setUser(user ? user : null));

    return () => {
      logIn();
    };
  }, []);

  return (
    <>
      {user ? (
        <div className={style.container}>
          <Filter />
        </div>
      ) : (
        <Result
          status="403"
          title="Sorry, you are not authorized to access this page."
          subTitle="Log in to access this page!"
        />
      )}
    </>
  );
};

export default ProtectedBrowseInfluencers;
