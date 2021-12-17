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
      <div className=" flex flex-col items-center">

        <div className="flex flex-col">

          <div>
            <h1 className="text-5xl font-bold text-gray-800 p-6">
              Autonomous Controls</h1>
          </div>
          
          <div>
            <h2 className="text-l text-gray-800 p-6">
              <span className="font-bold underline">Click on the screen</span> to set target points.
            </h2>
          </div>

          <div>
            <h2 className="text-l text-gray-800 p-6">
              We want the car to hit each of these points autonomously. We implemented three ways of doing this, 
              Bang-Bang, PID and optimal control. <span className="font-bold underline">[include link to documentation?]</span>
              When you've set the points you want and selected the control you want to see from the drop down, 
              and click the <span className="font-bold underline"> track waypoints </span> button below.
            </h2>
          </div>

          <div>
            <h2 className="text-l text-gray-800 p-6">
              What do you notice? Can you find situations where the car cannot hit one of the points?
              (Hint: use the <span className="font-bold underline">"T" button</span> and see what happens when you put a point inside a turning cirlce!).
            </h2>
          </div>


        </div>


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
            Track waypoints!
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
