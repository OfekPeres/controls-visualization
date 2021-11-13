import React from 'react';
import RRTVisualization from '../components/rrtVisualization';
// markup
const IndexPage = () => {
  return (
    <main>
      <div className="bg-blue-300 text-6xl flex items-center justify-center py-6 mb-6">Example RRT</div>
      {typeof window !== 'undefined' && <RRTVisualization/>} 
    </main>
  );
};

export default IndexPage;
