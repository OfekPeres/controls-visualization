import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import tutorialSketch from './tutorialSketch';
import TutorialText from './tutorialText';
import useWindowSize from '../../customhooks/useWindowSize';

const initialSketchState = { canvasWidth: 800, canvasHeight: 800 };

const LARGE_SCREEN = 1024;
export default function Tutorial() {
  const [sketchState, setSketchState] = useState(initialSketchState);
  const windowSize = useWindowSize();

  //   Resize the p5 canvas when the screen size changes
  useEffect(() => {
    const width =
      windowSize.width < LARGE_SCREEN
        ? windowSize.width * 0.8 - 25
        : windowSize.width / 2 - 100;
    const height =
      windowSize.width < LARGE_SCREEN
        ? windowSize.height * 0.5
        : windowSize.height - 250;
    setSketchState((prev) => ({
      ...prev,
      canvasWidth: width,
      canvasHeight: height,
    }));
  }, [windowSize]);
  const sketchRef = useRef();
  useEffect(() => {
    let myp5 = new p5(tutorialSketch(sketchState), sketchRef.current);

    // Return a function that deletes the canvas so we don't have duplicates
    return () => {
      myp5.remove();
    };
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      {/* <h1 className="text-black text-lg">{JSON.stringify(windowSize)}</h1> */}
      <TutorialText />
      <div
        className="cursor-pointer p-6"
        ref={sketchRef}
        style={{
          width: sketchState.canvasWidth,
          height: sketchState.canvasHeight,
        }}
      ></div>
    </div>
  );
}
