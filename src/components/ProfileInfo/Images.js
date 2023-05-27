import React from 'react';

const Images = ({ imgSrc, imgClass, imgAlt }) => {
  return (
    <img className={imgClass} src={imgSrc} alt={imgAlt} />
  );
};

export default Images;