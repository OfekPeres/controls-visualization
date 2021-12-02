import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import ReactLoading from 'react-loading';
import axios from 'axios';
import Slider from '../ui/slider';
import pidSketchFunction from './pidSketch';
const initialState = {
  waypoints: [],
  controls: [],
};

const initialSketchState = {
  carLength: 70,
  carSpeed: 1,
  carColor: '#ee6352',
  waypoints: [],
  canvasWidth: 600,
  canvasHeight: 600,
  hasControlInputs: false,
};
function PIDExample() {
  const [state, setState] = useState(initialState);
  const [sketchState, setSketchState] = useState(initialSketchState);
  const [isLoading, setIsLoading] = useState(false);
  const canvas_ref = useRef();
  const car_ref = useRef({
    x: sketchState.canvasWidth / 2,
    y: sketchState.canvasHeight / 2,
    theta: 0,
    phi: 0,
  });

  /*----------------------------------------------------------------------------
  Send the user defined waypoints to the backend to get the control inputs 
  to drive to!
  --------------------------------------------------------------------------- */
  async function getBangBangPIDControls() {
    if (isLoading) return;
    setIsLoading(true);
    const url = `${process.env.GATSBY_BACKEND_URL}/bangbang`;

    const postData = {
      carLength: sketchState.carLength,
      carSpeed: sketchState.carSpeed,
      waypoints: sketchState.waypoints,
      ...car_ref.current,
    };
    const payload = await axios.post(url, postData);
    setIsLoading(false);
    setState(payload.data);
    setSketchState((prev) => ({ ...prev, hasControlInputs: true }));
  }
  useEffect(() => {
    const my_p5 = new p5(
      pidSketchFunction(state, sketchState, setSketchState, car_ref),
      canvas_ref.current
    );
    return () => my_p5.remove();
  }, [state, sketchState]);

  return (
    <div className="flex flex-col items-center justify-center">
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
        ref={canvas_ref}
        style={{
          width: sketchState.canvasWidth,
          height: sketchState.canvasHeight,
        }}
      ></div>
      <div className="flex justify-center items-center space-x-3">
        <button
          className="bg-blue-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 disabled:cursor-not-allowed"
          onClick={() => getBangBangPIDControls()}
          disabled={isLoading}
        >
          Calculate the control inputs!
        </button>
        <button
          className="bg-red-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-red-400 hover:ring hover:ring-red-400"
          onClick={() => {
            setSketchState({
              ...sketchState,
              waypoints: [],
              hasControlInputs: false,
            });
          }}
        >
          Clear Waypoints (X)
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-lg">
        <h1 className="text-3xl font-bold">Customize your car!</h1>
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
        />
      </div>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
}

export default PIDExample;
