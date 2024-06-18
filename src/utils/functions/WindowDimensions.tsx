/**
 * * This hook returns the viewport/window height and width
 */

'use client';

import { useEffect, useState } from 'react';

type WindowDimensions = {
  windowWidth: number | undefined;
  windowHeight: number | undefined;
};

const UseWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    windowWidth: undefined,
    windowHeight: undefined,
  });
  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default UseWindowDimensions;
