import Car from '../../../carVisualizer/car';
import CarManager from '../../../carVisualizer/carManager';
export default function optimalControlSketch(
  dubinsState,
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

    const carManager = new CarManager(car, sketchState, p5);
    if (dubinsState && dubinsState.paths) {
      carManager.setPaths(dubinsState.paths);
    }
    // SETUP
    function setup() {
      const canvas = p5.createCanvas(W, H);
      //   Highly Important, p5js is a left handed system, so translate
      //   the origin to the bottom left corner and flip the y axis
      //   However, this will still result in the angles facing exactly 180 degrees incorrectly
      // when switching between the two systems, so before sending any angles to the back end, rotate them by 180
      p5.translate(0, H); //moves the origin to bottom left
      p5.scale(1, -1); //flips the y values so y increases "up"

      p5.background(100);
      canvas.mousePressed(mousePressed);
    }

    function drawPoseWayPoints() {
      sketchState.poseWayPoints.forEach((pose) => {
        const c = new Car(
          pose.x,
          pose.y,
          pose.theta,
          0,
          sketchState.carLength,
          'green',
          null,
          p5
        );
        c.display();
        writeText(pose.index, pose.x, pose.y);
        if (pose.selected) {
          p5.noFill();
          p5.stroke(255, 240, 254);
          p5.strokeWeight(1);
          p5.circle(pose.x, pose.y, sketchState.carLength + 5);
        }
      });
    }

    function writeText(text, x, y) {
      p5.push();
      p5.scale(1, -1);
      p5.textSize(12);
      p5.text(text, x, -y);
      p5.pop();
    }
    function drawPositionWayPoints() {
      sketchState.positionWayPoints.forEach((point) => {
        p5.circle(point.x, point.y, sketchState.carLength * 0.5);
        writeText(
          point.index,
          point.x - sketchState.carLength * 0.05,
          point.y - sketchState.carLength * 0.01
        );
      });
    }

    function mousePressed() {
      // Set Waypoint!
      const waypoint = {
        x: p5.mouseX,
        y: H - p5.mouseY,
        theta: p5.radians(sketchState.selectedCarTheta),
        index: sketchState.poseWayPoints.length + 1,
        selected: true,
      };
      //   deselect previous poseWayPoints
      const deselectedWayPoints = sketchState.poseWayPoints.map((pose) => ({
        ...pose,
        selected: false,
      }));
      setSketchState((prev) => ({
        ...prev,
        poseWayPoints: [...deselectedWayPoints, waypoint],
      }));
    }

    function draw() {
      p5.background(100);
      p5.translate(0, H); //moves the origin to bottom left
      p5.scale(1, -1); //flips the y values so y increases "up"
      drawPositionWayPoints();
      drawPoseWayPoints();
      //  !!!! Animate thru controls
      //   if (
      //     sketchState.hasControlInputs &&
      //     controlIndex < dubinsState.controls.length - 1
      //   ) {
      //     car.setSpeed(sketchState.carSpeed);
      //     car.steer(dubinsState.controls[controlIndex]);
      //     controlIndex++;
      //     car.run();
      //     if (controlIndex == dubinsState.controls.length - 1) {
      //       car.setSpeed(0);
      //       setSketchState((prev) => ({ ...prev, hasControlInputs: false }));
      //     }
      //   }

      // Use the car manager class to run thru a set of dubins paths
      if (
        dubinsState &&
        dubinsState.paths &&
        !carManager.reachedGoal &&
        sketchState.controlMode == 'dubins'
      ) {
        carManager.step();
      } else {
        //     car = new Car(0,0,0, p5)
        //     controlIndex = 0
        car.run();
      }
      if (carManager.reachedGoal) {
        setSketchState((prev) => ({ ...prev, controlMode: null }));
      }
    }

    function keyPressed() {
      if (p5.keyCode === p5.UP_ARROW || p5.key === 'w')
        car.setSpeed(car.speed + 1);
      else if (p5.keyCode === p5.DOWN_ARROW || p5.key === 's')
        car.setSpeed(car.speed - 1);
      else if (p5.keyCode === p5.LEFT_ARROW || p5.key === 'a')
        car.steer(car.phi + 0.5);
      else if (p5.keyCode === p5.RIGHT_ARROW || p5.key === 'd')
        car.steer(car.phi - 0.5);
      else if (p5.key === 't') {
        car.shouldDrawImpossibleRegion = !car.shouldDrawImpossibleRegion;
      }
    }

    p5.setup = setup;
    p5.draw = draw;
    p5.keyPressed = keyPressed;
  };
}
