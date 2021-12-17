import React, { useMemo } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

function sliderThumbStyles(props) {
  return `
    width:16px;
    height:16px;
    background: ${props.color};
    background-color: ${props.color};
    cursor:pointer;
    outline:3px solid #333;
    border-radius:50%;
    opacity: ${props.opacity};
    -webkit-transition:.2s;
    
    &:hover {
        opacity: 100;
        transform: scale(1.2);
    }
    `;
}
function hoverSliderThumbStyles(props) {
  return `
    opacity:100%;
    transform: scale(1.2);
    -webkit-transition:.2s;
    transition: all .2s;
    `;
}

function getValueOffset(props) {
  return `
    left: 44%;
    `;
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  position: relative;

  .value {
    /* flex: 1; */
    font-size: 22px;
    ${(props) => getValueOffset(props)}
  }

  .slider {
    flex: 6;
    --webkit-appearance: none;
    width: 100%;
    height: 16px;
    border-radius: 5px;
    background: white;
    outline: none;

    &::-webkit-slider-thumb {
      --webkit-appearance: none;
      appearance: none;
      ${(props) => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-progress {
      ${(props) =>
        `background: linear-gradient(to right, transparent, ${props.color}); opacity: ${props.opacity}`};
      border-radius: 5px;
    }
  }

  .slider:focus {
    &::-webkit-slider-thumb {
      --webkit-appearance: none;
      appearance: none;
      ${(props) => hoverSliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      appearance: none;
      ${(props) => hoverSliderThumbStyles(props)}
    }
  }
`;
export default function Slider({
  value,
  setValue,
  min,
  max,
  step,
  color,
  displayValue,
  delay,
}) {
  function handleOnChange(e) {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
  }

  return (
    <Styled
      opacity={value / max > 0.1 ? value / max : 0.1}
      color={color}
      value={value}
      max={max}
    >
      <span>{min}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleOnChange}
        className="slider mx-4 focus:ring focus:ring-gray-300"
      />
      <span>{max}</span>
      {displayValue && (
        <div className={`value absolute top-[-28px] font-bold`}>{value}</div>
      )}
    </Styled>
  );
}

Slider.propTypes = {
  value: Proptypes.number.isRequired,
  setValue: Proptypes.func.isRequired,
  min: Proptypes.number.isRequired,
  max: Proptypes.number.isRequired,
  step: Proptypes.number.isRequired,
  color: Proptypes.string.isRequired,
};
