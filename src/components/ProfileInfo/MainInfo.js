import React from 'react';
import styles from './ProfileInfo.module.css';

const MainInfo = ({ mainInformation }) => {
  return (
    <>
      {mainInformation.map(({ mainInfo: { name, description, followers } }) => (
        <div key={name}className={styles.cardInfos}>
          {[
            { label: 'name', value: name },
            { label: 'description', value: description },
            { label: 'followers', value: `${followers} Followers` }
          ].map(({ label, value }) => (
            <span key={label} className={styles[label]}>
              {value}
            </span>
          ))}
        </div>
      ))}
    </>
  );
};

export default MainInfo;