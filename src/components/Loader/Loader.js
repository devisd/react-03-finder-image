import React from 'react';
import { Bars } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <Bars color="#3f51b5" height={70} width={200} ariaLabel="loading" />
    </div>
  );
};

export default Loader;
