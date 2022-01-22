import ISize from '../models/ISize';
import { useEffect, useState } from 'react';

export const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};
