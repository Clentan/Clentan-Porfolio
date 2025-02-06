import React from 'react';
import Image from './DSC_1083.JPG'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative py-60">
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
        <img 
          src={Image}
          alt="banner"
          className="w-full h-[600px] object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))'
          }}
        />
      </div>
    </div>
  );
};

export default RightBanner;