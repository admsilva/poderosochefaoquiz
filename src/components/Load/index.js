import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/load.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Load() {
  return (
    <Lottie options={defaultOptions} />
  );
}
