import React, { useEffect, useState } from 'react';
import style from './Header.module.css';
import Logo from '../Logo/Logo';
import { navLinks, buttons, logOut } from './data';
import NavBar from './NavBar';
import CustomButtons from '../CustomButtons';
import { auth } from '../Back-End/config';

const MyHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Logo LogoWidth={160} LogoHeight={90} LogoStyle={style.LogoStyle} />
        <NavBar navLinks={navLinks} isFooter={false} />
        <div className={style.headerButtons}>
          {user ? (
            <div className={style.userSection}>
            <div className={style.userName}>{user.displayName}</div>
            <CustomButtons  
              buttons={logOut.map((item)=> ({
              ...item,
              buttonOnClick: handleLogout
            }))} buttonClass={style.signButton} />
            </div>
          ) : (
            <CustomButtons buttons={buttons} buttonClass={style.signButton} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
