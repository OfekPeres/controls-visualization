import React, { useRef, useEffect, useState } from 'react'
import p5 from 'p5'
import Car from './car'

function SquareSketch() {
    const canvas_ref = useRef()
    let car;

    useEffect(() => {
        function sketch(p5) {
            const W = 600
            const H = 600
            let cx = 0
            let cy = 0 
            let r = 50
            car = new Car(W / 2, H / 2, 3.14/2, p5)

            // SETUP
            function setup() {
                p5.createCanvas(W, H)
            }


            function draw() {
                p5.background(100)
                p5.circle(cx,cy,r)
                car.track(cx,cy,r)
                car.run()
            }


            function keyPressed() {
                if (p5.keyCode === p5.UP_ARROW) car.speed += 2
                if (p5.keyCode === p5.DOWN_ARROW) car.speed -= 2
                if (p5.keyCode === p5.LEFT_ARROW) car.phi -= 0.5
                if (p5.keyCode === p5.RIGHT_ARROW) car.phi += 0.5
            }
            function mousePressed()
            {
                cx = p5.mouseX
                cy = p5.mouseY
            }

            p5.setup = setup
            p5.draw = draw
            p5.keyPressed = keyPressed
            p5.mousePressed = mousePressed

        }
        const my_p5 = new p5(sketch, canvas_ref.current)
        return () => p5.remove()
    }
    )

    return (
        <div>
            <p className="bg-green-400">{car && car.printStuff()}</p>
            <div ref={canvas_ref} className="flex justify-center"></div>
        </div>

    )
}

export default SquareSketch
