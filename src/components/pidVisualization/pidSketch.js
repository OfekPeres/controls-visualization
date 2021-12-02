import Car from './car';
export default function pidSketchFunction(
  pidState,
  sketchState,
  setSketchState,
  car_ref
) {
  return (p5) => {
    // Define some sketch constants
    const W = sketchState.canvasWidth;
    const H = sketchState.canvasHeight;
    // Define some colors
    const green = p5.color(0, 255, 0);
    const blue = p5.color(0, 50, 255);
    const red = p5.color(255, 50, 10);
    let car = new Car(
      car_ref.current.x,
      car_ref.current.y,
      car_ref.current.theta,
      car_ref.current.phi,
      sketchState.carLength,
      sketchState.carColor,
      car_ref,
      p5
    );

    car.setSpeed(0);
    // SETUP
    function setup() {
      const canvas = p5.createCanvas(W, H);
      p5.background(100);
      canvas.mousePressed(mousePressed);
    }

    function drawWayPoints() {
      sketchState.waypoints.forEach((point) => {
        p5.circle(point.x, point.y, sketchState.carLength * 0.5);
        p5.text(
          point.index,
          point.x - sketchState.carLength * 0.05,
          point.y - sketchState.carLength * 0.01
        );
      });
    }

    // Control Index needs to be outside the draw function in order to persist
    // between loops
    let controlIndex = 0;
    function draw() {
      //   !!!!! use front end pid
      p5.background(100);
      //   p5.circle(cx, cy, r);
      //   car.track(cx, cy, 1);
      drawWayPoints();
      //  !!!! Animate thru controls
      if (
        sketchState.hasControlInputs &&
        controlIndex < pidState.controls.length - 1
      ) {
        car.setSpeed(sketchState.carSpeed);
        car.steer(pidState.controls[controlIndex]);
        controlIndex++;
        car.run();
        if (controlIndex == pidState.controls.length - 1) {
          car.setSpeed(0);
          setSketchState((prev) => ({ ...prev, hasControlInputs: false }));
        }
      } else {
        //     car = new Car(0,0,0, p5)
        //     controlIndex = 0
        car.run();
      }
    }

    function keyPressed() {
      if (p5.keyCode === p5.UP_ARROW || p5.key === 'w')
        car.setSpeed(car.speed + 1);
      else if (p5.keyCode === p5.DOWN_ARROW || p5.key === 's')
        car.setSpeed(car.speed - 1);
      else if (p5.keyCode === p5.LEFT_ARROW || p5.key === 'a')
        car.steer(car.phi - 0.5);
      else if (p5.keyCode === p5.RIGHT_ARROW || p5.key === 'd')
        car.steer(car.phi + 0.5);
      else if (p5.key === 't') {
        car.shouldDrawImpossibleRegion = !car.shouldDrawImpossibleRegion;
      }
    }
    function mousePressed() {
      // Set Waypoint!
      const waypoint = {
        x: p5.mouseX,
        y: p5.mouseY,
        index: sketchState.waypoints.length + 1,
      };
      setSketchState((prev) => ({
        ...prev,
        waypoints: [...sketchState.waypoints, waypoint],
      }));
    }

    p5.setup = setup;
    p5.draw = draw;
    p5.keyPressed = keyPressed;
  };
}
