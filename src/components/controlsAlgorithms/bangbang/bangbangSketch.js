import Car from '../../../carVisualizer/car';
import CarManager from '../../../carVisualizer/carManager';
export default function bangbangSketch(sketchState, setSketchState, car_ref) {
  return (p5) => {
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
    function setup() {
      const canvas = p5.createCanvas(W, H);
      canvas.mousePressed(mousePressed);
      p5.background('#747474');
    }

    // Helper Functions
    function writeText(text, x, y) {
      p5.push();
      p5.scale(1, -1);
      p5.textSize(12);
      p5.fill(0)
      p5.text(text, x, -y);
      p5.pop();
    }
    function drawPositionWayPoints() {
      p5.fill('#baff29');
      p5.noStroke();
      sketchState.positionWayPoints.forEach((point) => {
        p5.circle(point.x, point.y, sketchState.carLength * 0.5);
        writeText(
          point.index,
          point.x - sketchState.carLength * 0.05,
          point.y - sketchState.carLength * 0.01
        );
      });
    }

    // P5 required Functions
    function draw() {
      p5.background('#747474');
      p5.translate(0, H); //moves the origin to bottom left
      p5.scale(1, -1); //flips the y values so y increases "up"
      drawPositionWayPoints();
      if (
        sketchState &&
        sketchState.positionWayPoints &&
        sketchState.controlMode == 'pid'
      ) {
        carManager.pidTrackPositionWayPoints(sketchState.positionWayPoints);
      } else {
        //     car = new Car(0,0,0, p5)
        //     controlIndex = 0
        car.run();
      }
      if (carManager.reachedGoal) {
        setSketchState((prev) => ({ ...prev, controlMode: null }));
      }
    }

    function handleKeyPressed() {
      if (p5.keyCode === p5.UP_ARROW || p5.key === 'w') car.setSpeed(3);
      else if (p5.keyCode === p5.DOWN_ARROW || p5.key === 's') car.setSpeed(0);
      else if (p5.keyCode === p5.LEFT_ARROW || p5.key === 'a')
        car.steer(car.phi + car.max_steer);
      else if (p5.keyCode === p5.RIGHT_ARROW || p5.key === 'd')
        car.steer(car.phi - car.max_steer);
      else if (p5.key === 't') {
        car.shouldDrawImpossibleRegion = !car.shouldDrawImpossibleRegion;
      }
    }

    function mousePressed() {
      // Set Waypoint!
      const waypoint = {
        x: p5.mouseX,
        y: H - p5.mouseY,
        index: sketchState.positionWayPoints.length + 1
      };
      setSketchState((prev) => ({
        ...prev,
        positionWayPoints: [...prev.positionWayPoints, waypoint],
      }));
    }

    p5.setup = setup;
    p5.draw = draw;
    p5.keyPressed = handleKeyPressed;
  };
}
