import React, { useRef, useEffect, useState } from 'react'
import p5 from 'p5'
import Car from './car'

function SquareSketch() {
    const canvas_ref = useRef()
    let car;
    
    useEffect(() => {
        function sketch(p5_inst) {
            const W = 600
            const H = 600

            car = new Car(W/2, H/2, 0, p5_inst)

            // SETUP
            function setup() {
                p5_inst.createCanvas(W, H)
            }


            function draw() {
                p5_inst.background(100)
                car.run()
            }


            function keyPressed() {
            if(p5_inst.keyCode === p5_inst.UP_ARROW) {car.speed += 0.2
                console.log(car.speed)}

            if(p5_inst.keyCode === p5_inst.DOWN_ARROW) car.speed -= 0.2
            if(p5_inst.keyCode === p5_inst.LEFT_ARROW) car.phi -= 0.04
            if(p5_inst.keyCode === p5_inst.RIGHT_ARROW) car.phi += 0.04   
            }

            p5_inst.setup = setup
            p5_inst.draw = draw
            p5_inst.keyPressed = keyPressed

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
