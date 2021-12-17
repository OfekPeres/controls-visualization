import React, { useState, useEffect, useRef } from 'react';
import MyListbox from '../ui/listbox';
import RRTVisualization from './rrt';
const MAPPING_ALGORITHM_OPTIONS = [
  { id: 1, value: 'RRT', unavailable: false },
  { id: 2, value: 'RRT *', unavailable: false },
  { id: 3, value: 'BFS', unavailable: false },
];
export default function MappingAlgorithms() {
  const [selectedMappingAlgorithm, setSelectedMappingAlgorithm] =
    useState('RRT');
  return (
    <div className="flex flex-col items-center text-gray-800">
      <p className="text-xs lg:text-xl text-gray-800 font-bold p-2">Select a Mapping Algorithm!</p>
      <MyListbox
        options={MAPPING_ALGORITHM_OPTIONS}
        updateParentSelection={setSelectedMappingAlgorithm}
      />
      {
        {
          RRT: <RRTVisualization />,
          'RRT *': <h1>RRT *</h1>,
          BFS: <h1>BFS</h1>,
        }[selectedMappingAlgorithm.value]
      }
    </div>
  );
}
