import Car from '../../carVisualizer/car';
export default function tutorialSketch(sketchState) {
  return (p5) => {
    const W = sketchState.canvasWidth;
    const H = sketchState.canvasHeight;
    // Define some colors
    const green = p5.color(0, 255, 0);
    const blue = p5.color(0, 50, 255);
    const red = p5.color(255, 50, 10);
    const carLenH = Math.max(30, H/9)
    const carLenW = Math.max(30, W/9)
    const carLen = Math.min(carLenH, carLenW)
    const car = new Car(W / 2, H / 2, 0, 0, carLen, 'red', null, p5);
    function setup() {
      const canvas = p5.createCanvas(W, H);
      p5.background('#747474');
    }

    function draw() {
      p5.background('#747474');
      p5.translate(0, H); //moves the origin to bottom left
      p5.scale(1, -1); //flips the y values so y increases "up"
      car.run();
    }

    function handleKeyPressed() {
      if (p5.keyCode === p5.UP_ARROW || p5.key === 'w')
        car.setSpeed(3);
      else if (p5.keyCode === p5.DOWN_ARROW || p5.key === 's')
        car.setSpeed(0);
      else if (p5.keyCode === p5.LEFT_ARROW || p5.key === 'a')
        car.steer(car.phi + car.max_steer);
      else if (p5.keyCode === p5.RIGHT_ARROW || p5.key === 'd')
        car.steer(car.phi - car.max_steer);
      else if (p5.key === 't') {
        car.shouldDrawImpossibleRegion = !car.shouldDrawImpossibleRegion;
      }
    }

    p5.setup = setup;
    p5.draw = draw;
    p5.keyPressed = handleKeyPressed;
  };
}
