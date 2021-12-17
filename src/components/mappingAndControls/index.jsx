import ListBox from '../ui/listbox';
import React, { useState, useEffect, useRef } from 'react';
import BangBangRRTVisualization from './bangbangRRT';


const CONTROL_ALGORITHM_OPTIONS = [
  { id: 1, value: 'Bang Bang', unavailable: false },
  { id: 2, value: 'Optimal Control', unavailable: false },
  { id: 3, value: 'PID', unavailable: false },
];

const MAPPING_ALGORITHM_OPTIONS = [
  { id: 1, value: 'RRT', unavailable: false },
  { id: 2, value: 'RRT *', unavailable: false },
  { id: 3, value: 'BFS', unavailable: false },
];
export default function MappingandControlAlgorithms() {
  const [selectedControlAlgorithm, setSelectedControlAlgorithm] =
    useState('Bang Bang');
  const [selectedMappingAlgorithm, setSelectedMappingAlgorithm] =
    useState('RRT');
  return (
    <div className="flex flex-col items-center text-gray-800">
      <h1 className="text-xs lg:text-xl text-gray-800 font-bold">
        Select a Control and a Mapping Algorithm!
      </h1>
      <div className='flex justify-center space-x-4'>
        <ListBox
          options={CONTROL_ALGORITHM_OPTIONS}
          updateParentSelection={setSelectedControlAlgorithm}
        />

        <ListBox
          options={MAPPING_ALGORITHM_OPTIONS}
          updateParentSelection={setSelectedMappingAlgorithm}
        />
      </div>
      {
        {
          'Bang Bang RRT': <BangBangRRTVisualization/>,
         
        }[selectedControlAlgorithm.value + " " + selectedMappingAlgorithm.value]
      }
    </div>
  );
}
