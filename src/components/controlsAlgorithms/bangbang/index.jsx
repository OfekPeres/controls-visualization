import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import bangbangSketch from './bangbangSketch';
// import TutorialText from './tutorialText';
import useCanvasSize from '../../../customhooks/useCanvasSize';

const initialSketchState = {
  carLength: 10,
  carSpeed: 1,
  carColor: '#ee6352',
  positionWayPoints: [],
  canvasWidth: 600,
  canvasHeight: 600,
  controlMode: null,
};

export default function BangBang() {
  const [sketchState, setSketchState] = useState(initialSketchState);
  const canvasSize = useCanvasSize();
  const sketchRef = useRef();
  const car_ref = useRef({
    x: sketchState.canvasWidth / 2,
    y: sketchState.canvasHeight / 2,
    theta: 0,
    phi: 0,
  });
  //   Resize the p5 canvas when the screen size changes
  useEffect(() => {
    const { width, height } = canvasSize;
    setSketchState((prev) => ({
      ...prev,
      canvasWidth: width,
      canvasHeight: height,
    }));
  }, [canvasSize]);
  useEffect(() => {
    let myp5 = new p5(
      bangbangSketch(sketchState, setSketchState, car_ref),
      sketchRef.current
    );

    // Return a function that deletes the canvas so we don't have duplicates
    return () => {
      myp5.remove();
    };
  }, [sketchState]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      {/* <h1 className="text-black text-lg">{JSON.stringify(windowSize)}</h1> */}
      <div className=" text-blue-800 flex flex-col items-center">
        <h1 className="text-6xl">Bang Bang Component!</h1>
        <div className="flex space-x-3">
          <button
            className="bg-blue-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 disabled:hover:ring-0 disabled:cursor-not-allowed"
            disabled={sketchState.positionWayPoints.length === 0}
            onClick={() =>
              setSketchState((prev) => ({
                ...prev,
                controlMode: 'pid',
              }))
            }
          >
            Track the waypoints with PID!
          </button>
          <button
            className="bg-red-300 text-black px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-red-400 disabled:cursor-not-allowed"
            onClick={() =>
              setSketchState((prev) => ({
                ...prev,
                positionWayPoints: [],
              }))
            }
          >
            Clear Waypoints!
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div
          className="cursor-pointer p-6 mb-20 lg:mb-0"
          ref={sketchRef}
          style={{
            width: sketchState.canvasWidth,
            height: sketchState.canvasHeight,
          }}
        ></div>
      </div>
    </div>
  );
}
