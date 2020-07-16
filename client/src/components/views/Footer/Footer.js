import React from 'react';
import { HeartFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
      }}
    >
      <p>
        {' '}
        Made with <HeartFilled style={{ color: 'red' }} /> by{' '}
        <strong>Prince Sharma </strong>
      </p>
    </div>
  );
};

export default Footer;
