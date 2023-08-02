import React from 'react';
import { Link } from 'react-router-dom';
import Error404 from '../components/images/Error404.jpeg';

const NotFound = () => {
  return (
    <>
      <img src={Error404} alt="Error 404" />
      <Link to="/">Back to home</Link>
    </>
  );
};

export default NotFound;
