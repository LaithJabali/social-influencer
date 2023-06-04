import React from 'react';
import styles from './GetStarted.module.css';
import CustomButtons from '../CustomButtons';
import { button, paragraphs } from './data';

const GetStarted = () => {
  return (
    <>
      <div className={styles.container}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.text} className={paragraph.className}>
            {paragraph.text}
          </p>
        ))}
        <CustomButtons buttons={button} buttonClass={styles.button} />
      </div>
    </>
  );
};

export default GetStarted;