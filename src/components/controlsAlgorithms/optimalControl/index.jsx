import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import ReactLoading from 'react-loading';
import axios from 'axios';
import Slider from '../../ui/slider';
import optimalControlsSketch from './optimalControlSketch';
import useCanvasSize from '../../../customhooks/useCanvasSize';
const initialState = {
  waypoints: [],
  controls: [],
};

const initialSketchState = {
  carLength: 44,
  carSpeed: 1,
  carColor: '#ff0000',
  selectedCarTheta: 0,
  poseWayPoints: [],
  positionWayPoints: [],
  canvasWidth: 600,
  canvasHeight: 600,
  controlMode: null,
};
function DubinsPath() {
  const [state, setState] = useState(initialState);
  const [sketchState, setSketchState] = useState(initialSketchState);
  const [isLoading, setIsLoading] = useState(false);
  const canvasSize = useCanvasSize();
  const canvas_ref = useRef();
  const car_ref = useRef({
    x: sketchState.canvasWidth / 4,
    y: sketchState.canvasHeight / 4,
    theta: 0,
    phi: 0,
  });

  /*----------------------------------------------------------------------------
  Send the user defined pose waypoints to the backend to get the control inputs 
  to drive to!
  --------------------------------------------------------------------------- */
  async function getDubinsPath() {
    if (isLoading) return;
    setIsLoading(true);
    const url = `${process.env.GATSBY_BACKEND_URL}/dubins_path`;

    const postData = {
      carLength: sketchState.carLength,
      carSpeed: sketchState.carSpeed,
      targetPoses: [
        {
          x: car_ref.current.x,
          y: car_ref.current.y,
          theta: car_ref.current.theta,
        },
        ...sketchState.poseWayPoints,
      ],
      ...car_ref.current,
    };
    const payload = await axios.post(url, postData);
    setIsLoading(false);
    setState(payload.data);
    setSketchState((prev) => ({
      ...prev,
      positionWayPoints: payload.data.waypoints,
      controlMode: 'null',
    }));
  }

  //   Resize the p5 canvas when the screen size changes
  useEffect(() => {
    const { width, height } = canvasSize;
    setSketchState((prev) => ({
      ...prev,
      canvasWidth: width,
      canvasHeight: height,
    }));
  }, [canvasSize]);

  //   Manage the p5 sketch
  useEffect(() => {
    const my_p5 = new p5(
      optimalControlsSketch(state, sketchState, setSketchState, car_ref),
      canvas_ref.current
    );
    return () => my_p5.remove();
  }, [state, sketchState]);

  function handleSelectedCarThetaUpdate(value) {
    const updatedPoseWaypoints = sketchState.poseWayPoints.map((pose) => {
      if (pose.selected) {
        return { ...pose, theta: (value * Math.PI) / 180 };
      } else {
        return { ...pose };
      }
    });
    setSketchState((prev) => ({
      ...prev,
      selectedCarTheta: value,
      poseWayPoints: updatedPoseWaypoints,
    }));
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* Text and Buttons go here */}
      <div className=" flex flex-col items-center">
        <div className="flex flex-col">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 p-6">
              Optimal Controls
            </h1>
          </div>

          <div>
            <h2 className="text-l text-gray-800 p-6">
              <span className="font-bold underline">Click on the screen</span>{' '}
              to set target points, and use the slider to change the orientation
              of each target.
            </h2>
          </div>

          <div>
            <h2 className="text-l text-gray-800 p-6">
              Optimal controls enables perfect tracking of points, with both
              location and orientation! When you've set the points you want,
              click the{' '}
              <span className="font-bold underline">
                {' '}
                Calculate Dubin's Path{' '}
              </span>{' '}
              button, and then the{' '}
              <span className="font-bold underline">
                {' '}
                Run Dubin's Path{' '}
              </span>{' '}
              button!
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-black">
          <div className="flex flex-col items-center justify-center text-lg">
            <h1 className="text-3xl font-bold">Customize your waypoints!</h1>
            <h3>
              Set the orientation of your waypoint:{' '}
              {sketchState.selectedCarTheta}
            </h3>
            <Slider
              value={sketchState.selectedCarTheta}
              setValue={handleSelectedCarThetaUpdate}
              min={0}
              max={360}
              step={1}
              color={'blue'}
            />
            {/* <h1 className="text-3xl font-bold">Customize your car!</h1>
          <h3>Set the Length of your car: {sketchState.carLength}</h3>
          <Slider
            value={sketchState.carLength}
            setValue={(value) =>
              setSketchState({ ...sketchState, carLength: value })
            }
            min={20}
            max={100}
            step={1}
            color={'blue'}
          />
          <h3>Set the Speed of your car: {sketchState.carSpeed}</h3>
          <Slider
            value={sketchState.carSpeed}
            setValue={(value) =>
              setSketchState({ ...sketchState, carSpeed: value })
            }
            min={1}
            max={sketchState.carLength}
            step={1}
            color={'green'}
          />
          <h3>Set the Color of your car</h3>
          <input
            type="color"
            value={sketchState.carColor}
            onInput={(e) =>
              setSketchState({ ...sketchState, carColor: e.target.value })
            }
          /> */}
          </div>

          <div className="flex justify-center items-center space-x-3">
            <button
              className="bg-blue-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 disabled:cursor-not-allowed"
              onClick={() => getDubinsPath()}
              disabled={isLoading || sketchState.poseWayPoints.length < 1}
            >
              Calculate Dubins Path!
            </button>
            <button
              className="bg-blue-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 disabled:cursor-not-allowed"
              onClick={() => {
                setSketchState((prev) => ({
                  ...prev,
                  controlMode: 'dubins',
                }));
              }}
              disabled={isLoading || sketchState.poseWayPoints.length < 1}
            >
              Run Dubins Path!
            </button>
            <button
              className="bg-red-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-red-400 hover:ring hover:ring-red-400"
              onClick={() => {
                setSketchState({
                  ...sketchState,
                  poseWayPoints: [],
                  positionWayPoints: [],
                  hasControlInputs: false,
                });

                setState((prev) => ({ ...prev, waypoints: null, paths: null }));
              }}
            >
              Clear Waypoints (X)
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {isLoading ? (
          <div className="flex items-center justify-center space-x-3">
            <p>"Waiting for backend to deliver results!"</p>
            <ReactLoading
              type="spinningBubbles"
              color="blue"
              width="24px"
              height="24px"
            ></ReactLoading>
          </div>
        ) : (
          ''
        )}

        <div
          className="p-6 mb-20 lg:mb-0"
          ref={canvas_ref}
          style={{
            width: sketchState.canvasWidth,
            height: sketchState.canvasHeight,
          }}
        ></div>
      </div>
    </div>
  );
}

export default DubinsPath;
