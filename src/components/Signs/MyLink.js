import React from 'react';
import { Link } from 'react-router-dom';

const MyLink = ({ Links }) => {
  return (
    <>
      {Links.map((item, index) => (
        <Link key={index} className={item.LinkClass} to={item.To}>
          {item.LinkTitle}
        </Link>
      ))}
    </>
  );
};

export default MyLink;
