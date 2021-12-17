import React, { useState, useEffect } from 'react';
const LARGE_SCREEN = 1024;
export default function useCanvasSize() {
  const [windowSize, setWindowSize] = useState({
    width: 300,
    height: 300,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set canvas width/height based on the window size to the state
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const width =
        windowWidth < LARGE_SCREEN
          ? windowWidth * 0.8 - 25
          : windowWidth / 2 - 100;

      const height =
        windowWidth < LARGE_SCREEN ? windowHeight * 0.5 : windowHeight - 300;
      setWindowSize({
        width,
        height,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
