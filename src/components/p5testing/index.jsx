import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import testingSketchFunction from './testingSketch';

const initialSketchState = { canvasWidth: 800, canvasHeight: 800 };
export default function P5Example() {
  const [sketchState, setSketchState] = useState(initialSketchState);
  const ref = useRef();
  useEffect(() => {
    let myp5 = new p5(testingSketchFunction(sketchState), ref.current);

    // Return a function that deletes the canvas so we don't have duplicates
    return () => {
      myp5.remove();
    };
  });

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div
        className="cursor-pointer"
        ref={ref}
        style={{
          width: sketchState.canvasWidth,
          height: sketchState.canvasHeight,
        }}
      ></div>
    </div>
  );
}
