export default function testingSketchFunction(sketchState) {
  return (p5) => {
    const W = sketchState.canvasWidth;
    const H = sketchState.canvasHeight;
    // Define some colors
    const green = p5.color(0, 255, 0);
    const blue = p5.color(0, 50, 255);
    const red = p5.color(255, 50, 10);

    function setup() {
      const canvas = p5.createCanvas(W, H);
      //   Highly Important, p5js is a left handed system, so translate
      //   the origin to the bottom left corner and flip the y axis
      //   However, this will still result in the angles facing exactly 180 degrees incorrectly
      // when switching between the two systems, so before sending any angles to the back end, rotate them by 180
      //   p5.translate(0, H); //moves the origin to bottom left
      //   p5.scale(1, -1); //flips the y values so y increases "up"

      p5.background(100);
    }

    // function draw() {
    //   p5.background(100);
    //   p5.translate(0, H); //moves the origin to bottom left
    // //   p5.scale(1, -1); //flips the y values so y increases "up"
    //   p5.rotate(p5.PI); //flips the y values so y increases "up"
    //   const displaytext = `(x,y): (${p5.mouseX}, ${p5.mouseY})`;
    //   p5.push();
    //   p5.scale(1, -1);
    //   console.log(displaytext)
    //   p5.text(displaytext, W / 2, H - 50);
    //   p5.pop();
    // }

    function draw() {
      p5.background(240);
      p5.translate(0, H); //moves the origin to bottom left
      p5.scale(1, -1); //flips the y values so y increases "up"
      let v0 = p5.createVector(W / 2, H / 2);

      let v1 = p5.createVector(50, 0);
      drawArrow(v0, v1, 'red');

      let v2 = p5.createVector(p5.mouseX - W / 2, H - p5.mouseY - H / 2);
      drawArrow(v0, v2, 'blue');

      let angleBetween = v1.angleBetween(v2);
      p5.push()
      p5.scale(1,-1)
     p5.translate(0,-H)
      p5.noStroke();
      p5.text(
        'angle between: ' +
          angleBetween.toFixed(2) +
          ' radians or ' +
          p5.degrees(angleBetween).toFixed(2) +
          ' degrees',
        10,
        50,
        90,
        50
      );
    }
    p5.pop()

    // draw an arrow for a vector at a given base position
    function drawArrow(base, vec, myColor) {
      p5.push();
      p5.stroke(myColor);
      p5.strokeWeight(3);
      p5.fill(myColor);
      p5.translate(base.x, base.y);
      p5.line(0, 0, vec.x, vec.y);
      p5.rotate(vec.heading());
      let arrowSize = 7;
      p5.translate(vec.mag() - arrowSize, 0);
      p5.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
      p5.pop();
    }
    p5.setup = setup;
    p5.draw = draw;
  };
}
