import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../gif/codingGif.json';

const CodingGif = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default CodingGif;
