import React from 'react';

export const LoadingSpinner = () => {
  return (
    <>
      <style>
        {`.loading-lion {
                    display: flex;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 200px;
                    height: 200px;
                    justify-content: center;
                    align-items: center;
                    margin: auto;
                }`}
      </style>
      <div className="animate-bounce loading-lion">
        <span style={{transform: 'scale(7)'}}>🦁</span>
      </div>
    </>
  );
};
