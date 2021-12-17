import React from 'react';
import Slider from '../../ui/slider';
function StartNodeSlider({ value, setValue, min, max, step, color }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>The Start Node Radius is: {value}</p>
      <Slider
        value={value}
        setValue={setValue}
        min={min}
        max={max}
        step={step}
        color={color}
      ></Slider>
    </div>
  );
}

function GoalNodeSlider({ value, setValue, min, max, step, color }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>The Goal Area Radius is: {value}</p>
      <Slider
        value={value}
        setValue={setValue}
        min={min}
        max={max}
        step={step}
        color={color}
      ></Slider>
    </div>
  );
}

function CircleRadiusSlider({ value, setValue, min, max, step, color }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Set the radius of the circle obstacles: {value}</p>
      <Slider
        value={value}
        setValue={setValue}
        min={min}
        max={max}
        step={step}
        color={color}
      ></Slider>
    </div>
  );
}

function StepSizeRadiusSlider({ value, setValue, min, max, step, color }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Set the max step size for the RRT algorithm: {value}</p>
      <Slider
        value={value}
        setValue={setValue}
        min={min}
        max={max}
        step={step}
        color={color}
      ></Slider>
    </div>
  );
}

function RectangleSizeSlider({
  width,
  height,
  setWidth,
  setHeight,
  min,
  max,
  step,
  color,
}) {
  return (
    <div>
      <h3 className="text-lg font-bold">
        Set the Dimensions of the Rectangular Obstacles
      </h3>
      <p>Set the Width: {width}</p>
      <Slider
        value={width}
        setValue={setWidth}
        min={min}
        max={max}
        step={step}
        color={color}
      ></Slider>
      <p>Set the Height: {height}</p>
      <Slider
        value={height}
        setValue={setHeight}
        min={min}
        max={max}
        step={step}
        color={color}
      ></Slider>
    </div>
  );
}

export {
  StartNodeSlider,
  GoalNodeSlider,
  RectangleSizeSlider,
  CircleRadiusSlider,
  StepSizeRadiusSlider
};
