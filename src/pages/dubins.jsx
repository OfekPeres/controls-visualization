import React from 'react';
import DubinsPathVisualization from '../components/dubinsPathVisualization';
// markup
const DubinsPage = () => {
  return (
    <main>
      <div className="bg-blue-300 text-6xl flex items-center justify-center py-6 mb-6">Dubins Path Visualization</div>
      {typeof window !== 'undefined' && <DubinsPathVisualization/>} 
    </main>
  );
};

export default DubinsPage;
