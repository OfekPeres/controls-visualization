import React from 'react'
export default function TutorialText() {
    return <div className="flex flex-col">

        <div>
            <h1 className="text-5xl font-bold text-gray-800 p-6">
                Welcome! 👀</h1>
        </div>

        <div>
            <h2 className="text-xl text-gray-800 p-6">
                Use the <span className="font-bold underline">WASD</span> keys to drive the car around! 🕹 
                You are driving a <a href="http://planning.cs.uiuc.edu/node658.html" target="_blank" class="text-blue-600 ">
                Dubin's Car 🚗</a>!
            </h2>
        </div>


        <div>
            <h2 className="text-xl text-gray-800 p-6">
                <span className="font-bold underline">Press "T"</span> to see the car's turning circles. 
                The dynamics of this car are fully defined, which makes it easier to drive autonomously.
            </h2>
        </div>

        <div>
            <h2 className="text-xl text-gray-800 p-6">
                When you're ready, click on the next tab to play with control algorithms.
                If you'd like to learn more about anything we show on this website, please look at our documentation. 
            </h2>
        </div>

       


    </div>
}


