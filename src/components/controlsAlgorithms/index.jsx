import ListBox from '../ui/listbox';
import React, { useState, useEffect, useRef } from 'react';
import BangBang from './bangbang';

const CONTROL_ALGORITHM_OPTIONS = [
  { id: 1, value: 'Bang Bang', unavailable: false },
  { id: 2, value: 'PID', unavailable: false },
  { id: 3, value: 'Optimal Control', unavailable: false },
];
export default function ControlAlgorithms() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bang Bang');
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-xs lg:text-xl text-gray-800 font-bold p-2'>Select a Control Algorithm!</h1>
      <ListBox
        options={CONTROL_ALGORITHM_OPTIONS}
        updateParentSelection={setSelectedAlgorithm}
      />
      {
        {
          'Bang Bang': <BangBang />,
          PID: <h1>PID</h1>,
          'Optimal Control': <h1>Optimal Controls componenet here</h1>,
        }[selectedAlgorithm.value]
      }
      
    </div>
  );
}
