import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5'

export default function P5Example() {
  const [numCircles, setNumCircles] = useState(2);
  const [circleCount, setCircleCount] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const text = numCircles % 2 === 0 ? 'Even Circles' : 'Odd Circles';
    setCircleCount(text);
  }, [numCircles]);
  useEffect(() => {
    const sketchFunction = (sketch) => {
      const W = 600;
      const H = 600;
      console.log(`${process.env.GATSBY_TEST}`);
      console.log(`${process.env.GATSBY_API_URL}/users`);

      sketch.setup = () => {
        sketch.createCanvas(W, H);
        sketch.background(55);
        DrawCircles();
      };

      function DrawCircles() {
        for (let i = 0; i < numCircles; i++) {
          let cx = Math.random() * W * 0.9;
          let cy = Math.random() * H * 0.9;
          let r = (Math.random() * W) / 2 + 10;
          let c = sketch.color(
            255 * Math.random(),
            255 * Math.random(),
            255 * Math.random()
          );
          sketch.fill(c);
          sketch.noStroke();
          sketch.ellipse(cx, cy, r, r);
        }
      }

      sketch.draw = () => {
          if (sketch.mouseIsPressed)
          {
            let c = sketch.color(
                255 * Math.random(),
                255 * Math.random(),
                255 * Math.random()
              );
              sketch.fill(c);
            sketch.ellipse(sketch.mouseX,sketch.mouseY, 80, 80);
          }
      };
    };

    let myp5 = new p5(sketchFunction, ref.current);

    // Return a function that deletes the canvas so we don't have duplicates
    return () => {
      myp5.remove();
    };
  });

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex bg-green-50 space-x-3 items-center justfiy-center mb-4">
        <button
          className=" bg-green-300 px-10 py-3 text-5xl border hover:border-green-700 hover:bg-green-500"
          onClick={() => setNumCircles((prev) => prev - 1)}
        >
          -
        </button>
        <p className=" text-4xl font-mono h-full">
          Current # of Circles: {numCircles}
        </p>
        <button
          className=" bg-green-300 px-10 py-3 text-5xl border hover:border-green-700 hover:bg-green-500"
          onClick={() => setNumCircles((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className="cursor-pointer" ref={ref}></div>
      {
        ({ 'Even Circles': <div>Even</div>, 'Odd Circles': <div>Odd</div> },
        [circleCount])
      }
    </div>
  );
}
