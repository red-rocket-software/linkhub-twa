import { useEffect, useState } from 'react';
import { TUseWindowDimensions } from '.';

const getWindowDimensions = () => {
  const { innerWidth, innerHeight } = window;
  const width = innerWidth;
  const height = innerHeight
  return {
    width,
    height
  };
};

const useWindowDimensions = (): TUseWindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
export default useWindowDimensions;
