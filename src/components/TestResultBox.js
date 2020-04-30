import React from 'react';
import { deviceCheck } from 'utils/common';

const TestResultBox = () => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '20vh',
        left: '0',
        top: '50%',
        transform: 'translate(0, -50%)',
        border: '1px solid red',
        zIndex: '10000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {deviceCheck()}
    </div>
  );
};

export default TestResultBox;
