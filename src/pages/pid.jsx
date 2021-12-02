import React from 'react';
import PIDVisualization from '../components/pidVisualization'

// markup
function PID() {
    return (
        <main>
            <div className="bg-blue-300 text-6xl flex items-center justify-center py-6 mb-6"> PID Visualization</div>
            {typeof window !== 'undefined' && <PIDVisualization></PIDVisualization>}
            <div>Hello</div>
        </main>
    );
};

export default PID;
