import React from 'react';

const DashedLine = ({ length = 15, css=''}) => {
  return (
    <div className='flex items-center space-x-2  w-full h-6'>
      {
        Array.from({ length }).map((_, index) => (
          <div 
            key={index} 
            className={`${css}`}
          ></div>
        ))
      }
    </div>
  );
};

export default DashedLine;
