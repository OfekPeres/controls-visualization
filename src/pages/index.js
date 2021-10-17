import React from 'react';
import P5Example from '../components/p5example';
// markup
const IndexPage = () => {
  return (
    <main>
      <div className="bg-blue-300 text-6xl flex items-center justify-center py-6 mb-6">Example React App using a p5js script!</div>
      {typeof window !== 'undefined' && <P5Example/>} 
    </main>
  );
};

export default IndexPage;
