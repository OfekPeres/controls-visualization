import React from 'react'
export default function Docs()
{
    return <div className="flex flex-col p-6 text-black text-lg items-center justify-center">

        <h1 className='text-2xl p-3 font-bold'>Find our code in the following four repos!</h1>
        <ul className='space-y-3'>
            <li><a target="_blank" className="text-blue-600" href="https://github.com/OfekPeres/controls-visualization">Visualization Code (Front End)</a></li>
            <li><a target="_blank" className="text-blue-600" href="https://github.com/OfekPeres/controls-visualization-backend">Server Code (Python Flask Backend)</a></li>
            <li><a target="_blank" className="text-blue-600" href="https://github.com/OfekPeres/controls-algorithms">Control Algorithms</a></li>
            <li><a target="_blank" className="text-blue-600" href="https://github.com/OfekPeres/MappingAlgorithms">Mapping Algorithms</a></li>
        </ul>

        <h1 className='text-2xl p-3 font-bold'>Live Docs for the Controls and Mapping Algorithms can be found here:</h1>
        <ul className='space-y-3'>
            <li><a target="_blank" className="text-blue-600" href="https://ofekperes.github.io/MappingAlgorithms/">Mapping Algorithms Docs</a></li>
            <li><a target="_blank" className="text-blue-600" href="https://ofekperes.github.io/controls-algorithms/">Control Algorithms Docs</a></li>
        </ul>
        <h1 className='text-2xl p-3 font-bold'>System Design Docs + How can this project scale?</h1>
        <ul className='space-y-3'>
            <li><a target="_blank" className="text-blue-600" href="https://excalidraw.com/#json=tY5XrZ-6Xfl8tELidP6TA,etXktXFXcCbD3NsUiwdxlA">Link to Exalidraw Canvas</a></li>
        </ul>
    </div>
}