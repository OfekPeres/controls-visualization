import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import axios from 'axios';
import ListBox from '../../ui/listbox';
import rrtSketchFunction from './rrtSketch';
import { useDebounce } from '../../../customhooks/debounce';
import { preparePayload } from './axiosHelpers';
import ReactLoading from 'react-loading';
import useCanvasSize from '../../../customhooks/useCanvasSize';
import {
  StartNodeSlider,
  GoalNodeSlider,
  RectangleSizeSlider,
  CircleRadiusSlider,
  StepSizeRadiusSlider,
} from './helpers';

const SHAPES = [
  { id: 1, value: 'Start Node', unavailable: false },
  { id: 2, value: 'Goal Node', unavailable: false },
  { id: 3, value: 'Rectangle', unavailable: false },
  { id: 4, value: 'Circle', unavailable: false },
  { id: 5, value: 'Step Size', unavailable: false },
];

const initialSketchState = {
  obstacles: [],
  startPoint: {
    x: 15,
    y: 15,
    radius: 15,
    minRadius: 1,
    maxRadius: 100,
    step: 1,
  },
  goalPoint: {
    x: 300,
    y: 300,
    radius: 30,
    minRadius: 1,
    maxRadius: 100,
    step: 1,
  },
  stepSize: 28,
  circle: {
    radius: 20,
    minRadius: 1,
    maxRadius: 100,
    step: 1,
  },
  rectangle: {
    height: 20,
    width: 20,
    minLength: 1,
    maxLength: 100,
    step: 1,
  },
  canvasWidth: 600,
  canvasHeight: 600,
};

/**
 * The state of the RRT visualization defaults to null, is updated by the user
 * (for things like start, end, and obstacles), submits these to the backend
 * and gets back an object including a list of points
 * state = {
 * goal: array of 2 numbers [x,y],
 * goalRadius: number,
 * obstacles: array of objects, each object has the form {shape: string, definition: array}
 * (i.e. {shape:circle, definition: [0,0,1]}),
 * points: array of objects {x:number, y:number, parentIndex: number},
 *                          targetNodeIndex: number (the index of the point in the rrt at the goal )
 *
 * }
 * @returns
 */
export default function RRTVisualization() {
  /*----------------------------------------------------------------------------
  SET UP STATE AND REFS
  --------------------------------------------------------------------------- */
  const [state, setState] = useState(null);
  const [sketchState, setSketchState] = useState(initialSketchState);
  const [menuValue, setMenuValue] = useState('circle');
  const [isLoading, setIsLoading] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const canvasSize = useCanvasSize();
  // Chose not to debounce because it caused a size delay in rendering that looked bad when the sketch was redrawn
  // const debouncedSketchState = useDebounce(sketchState, 250);
  const ref = useRef();

  //   Resize the p5 canvas when the screen size changes
  useEffect(() => {
    const { width, height } = canvasSize;
    setSketchState((prev) => ({
      ...prev,
      canvasWidth: width,
      canvasHeight: height,
    }));
  }, [canvasSize]);
  /*----------------------------------------------------------------------------
  GET INITIAL RRT Example MAP WHEN THE PAGE LOADS 
  --------------------------------------------------------------------------- */
  // useEffect(() => {
  //   // getRRTMap()
  // }, []);

  /*----------------------------------------------------------------------------
  Send the user defined map to the backend to solve it!
  --------------------------------------------------------------------------- */
  async function getRRTMap() {
    if (isLoading) return;
    setIsLoading(true);
    const url = `${process.env.GATSBY_BACKEND_URL}/rrt`;
    const payload = await axios.post(url, preparePayload(sketchState));
    setIsLoading(false);
    setShouldAnimate(true);
    setState(payload.data);
  }
  /*----------------------------------------------------------------------------
  THIS IS THE USE EFFECT THAT MANAGES THE P5 RRT SKETCH FUNCTION
  --------------------------------------------------------------------------- */
  // This is the effect in charge of managing the p5 sketch
  useEffect(() => {
    let myp5 = new p5(
      rrtSketchFunction(
        state,
        sketchState,
        setSketchState,
        menuValue,
        shouldAnimate
      ),
      ref.current
    );
    setShouldAnimate(false);
    // Return a function that deletes the canvas so we don't have duplicates
    return () => {
      myp5.remove();
    };
  }, [state, sketchState, menuValue]);

  /*----------------------------------------------------------------------------
  HELPER FUNCTIONS TO ORGANIZE OUR SET STATE FOR THE DIFFERENT SLIDERS
  --------------------------------------------------------------------------- */
  // Helper Functions to manage state:
  /**
   *
   * @param {*} value The new Start Point Radius being captured by the slider input
   */
  function setStartPointRadius(value) {
    setSketchState((prev) => {
      return { ...prev, startPoint: { ...prev.startPoint, radius: value } };
    });
  }

  /**
   *
   * @param {*} value The new Goal Point Radius being captured by the slider input
   */
  function setGoalPointRadius(value) {
    setSketchState((prev) => {
      return {
        ...prev,
        goalPoint: { ...prev.goalPoint, radius: value },
      };
    });
  }

  /**
   *
   * @param {*} value The new rectangle obstacle width
   */
  function setRectangleWidth(value) {
    setSketchState((prev) => {
      return { ...prev, rectangle: { ...prev.rectangle, width: value } };
    });
  }

  /**
   *
   * @param {*} value The new rectangle obstacle height
   */
  function setRectangleHeight(value) {
    setSketchState((prev) => {
      return { ...prev, rectangle: { ...prev.rectangle, height: value } };
    });
  }

  function setCircleRadius(value) {
    setSketchState((prev) => {
      return { ...prev, circle: { ...prev.circle, radius: value } };
    });
  }

  function setStepSize(value) {
    setSketchState((prev) => {
      return { ...prev, stepSize: value };
    });
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-black">
      {/* IMPORTANT NOTE: REMEMBER TO SET THE WIDTH AND HEIGHT OF THE CANVAS ON THE DIV OR IT WILL HAVE STRANGE SCROLLING BEHAVIOR!!!!!!!!! */}
      <div className="text-black flex flex-col items-center">
        {/* Explanation of RRT Goes Here */}

        {/* User Input Code Starts Here */}

        <div class="flex flex-col">

        <div>
            <h1 className="text-5xl font-bold text-gray-800 p-6">
                Mapping</h1>
        </div>

        <div>
            <h2 className="text-l text-gray-800 p-6">
                Use the drop down menu and slider below to select things to place, and then <span className="font-bold underline">click on the screen</span> to place them! 
            </h2>
        </div>


        <div>
            <h2 className="text-l text-gray-800 p-6">
                Once you've placed a start node and end node, and any obstacles you'd like, choose the mapping algorithm you want to visulaise, then generate the map!
            </h2>
        </div>


        <div className="flex flex-col">
          {
            {
              'Start Node': (
                <StartNodeSlider
                  value={sketchState.startPoint.radius}
                  setValue={setStartPointRadius}
                  min={sketchState.startPoint.minRadius}
                  max={sketchState.startPoint.maxRadius}
                  step={sketchState.startPoint.step}
                  color={'#0079D9'}
                ></StartNodeSlider>
              ),
              'Goal Node': (
                <GoalNodeSlider
                  value={sketchState.goalPoint.radius}
                  setValue={setGoalPointRadius}
                  min={sketchState.goalPoint.minRadius}
                  max={sketchState.goalPoint.maxRadius}
                  step={sketchState.goalPoint.step}
                  color={'#0079D9'}
                ></GoalNodeSlider>
              ),
              Rectangle: (
                <RectangleSizeSlider
                  width={sketchState.rectangle.width}
                  height={sketchState.rectangle.height}
                  setWidth={setRectangleWidth}
                  setHeight={setRectangleHeight}
                  min={sketchState.rectangle.minLength}
                  max={sketchState.rectangle.maxLength}
                  step={sketchState.rectangle.step}
                  color={'#0079D9'}
                ></RectangleSizeSlider>
              ),
              Circle: (
                <CircleRadiusSlider
                  value={sketchState.circle.radius}
                  setValue={setCircleRadius}
                  min={sketchState.circle.minRadius}
                  max={sketchState.circle.maxRadius}
                  step={sketchState.circle.step}
                  color={'#0079D9'}
                ></CircleRadiusSlider>
              ),
              'Step Size': (
                <StepSizeRadiusSlider
                  value={sketchState.stepSize}
                  setValue={setStepSize}
                  min={10}
                  max={100}
                  step={1}
                  color={'#0079D9'}
                ></StepSizeRadiusSlider>
              ),
            }[menuValue.value]
          }
        </div>



    </div>
        <ListBox options={SHAPES} updateParentSelection={setMenuValue} />
        <div className="flex justify-center items-center space-x-3">
          <button
            className="bg-blue-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 disabled:cursor-not-allowed"
            onClick={() => getRRTMap()}
            disabled={isLoading}
          >
            Generate Map!
          </button>
          <button
            className="bg-red-300 px-3 py-2 m-3 rounded-md focus:outline-none focus:ring focus:ring-red-400 hover:ring hover:ring-red-400"
            onClick={() => setSketchState({ ...sketchState, obstacles: [] })}
          >
            Clear Obstacles (X)
          </button>
        </div>
        
      </div>
      {/* User Input Code Ends Here */}
      {/* This repositions the canvas */}
      <div className="flex flex-col justify-center text-center items-center">
        <div>
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
        </div>
        <div className="flex justify-center items-center">
          <div
            className="cursor-pointer p-6 mb-20 lg:mb-0"
            style={{
              height: `${sketchState.canvasHeight}px`,
              width: `${sketchState.canvasWidth}px`,
            }}
            ref={ref}
          ></div>
        </div>
      </div>
    </div>
  );
}
