export default function rrtSketchFunction(
  rrtState,
  sketchState,
  setSketchState,
  menuValue
) {
  return (p5) => {
    // Define some sketch constants
    const W = sketchState.canvasWidth;
    const H = sketchState.canvasHeight;
    // Define some colors
    const green = p5.color(0, 255, 0);
    const blue = p5.color(0, 50, 255);
    const red = p5.color(255, 50, 10);

    /**
     * A Method to draw all of the points in the rrtState object
     */
    function drawRRTPoints() {
      // Draw all of the points in the graph
      p5.stroke(blue);
      p5.strokeWeight(2);
      rrtState.points.forEach((point) => {
        const { x, y } = point;
        p5.fill(green);
        p5.circle(x, y, 3);
        // connect the current point to its "parent" with a line
        if (point.parentIndex !== -1) {
          const parent = rrtState.points[point.parentIndex];
          const { x: parentX, y: parentY } = parent;
          p5.line(x, y, parentX, parentY);
        }
      });
      // Draw Goal Path
      const goalNode = rrtState.points[rrtState.targetNodeIndex];
      let point = goalNode;
      p5.stroke(green);
      p5.strokeWeight(3);
      while (point.parentIndex !== -1) {
        const parent = rrtState.points[point.parentIndex];
        const { x: parentX, y: parentY } = parent;
        p5.line(point.x, point.y, parentX, parentY);
        point = rrtState.points[point.parentIndex];
      }
    }

    /**
     * A method to draw all of the currently defined obstacles
     */
    function drawObstacles() {
      p5.stroke(red);
      p5.fill(red);
      sketchState.obstacles.forEach((obs) => {
        switch (obs.shape) {
          case 'rectangle':
            p5.rect(obs.x, obs.y, obs.w, obs.h);
            break;
          case 'circle':
            p5.circle(obs.x, obs.y, obs.r*2);
            break;
          default:
        }
      });
    }

    /**
     * A method to draw the start and goal nodes
     */
    function drawStartandGoal() {
      p5.stroke(green);
      p5.fill(green);
      const {
        x: xstart,
        y: ystart,
        radius: startRadius,
      } = sketchState.startPoint;
      const { x: xgoal, y: ygoal, radius: goalRadius } = sketchState.goalPoint;

      p5.circle(xstart, ystart, startRadius*2);
      p5.stroke(p5.color(0));
      p5.fill(blue);
      p5.circle(xgoal, ygoal, goalRadius*2);
    }

    function handleMouseClicked() {
      switch (menuValue.value) {
        case 'Circle':
          const circle = {
            shape: 'circle',
            x: p5.mouseX,
            y: p5.mouseY,
            r: sketchState.circle.radius,
          };
          setSketchState((prev) => ({
            ...prev,
            obstacles: [...prev.obstacles, circle],
          }));
          break;

        case 'Rectangle':
          const rectangle = {
            shape: 'rectangle',
            x: p5.mouseX,
            y: p5.mouseY,
            w: sketchState.rectangle.width,
            h: sketchState.rectangle.height,
          };
          setSketchState((prev) => ({
            ...prev,
            obstacles: [...prev.obstacles, rectangle],
          }));
          break;

        case 'Start Node':
          setSketchState((prev) => ({
            ...prev,
            startPoint: { ...prev.startPoint, x: p5.mouseX, y: p5.mouseY },
          }));
          break;

        case 'Goal Node':
          setSketchState((prev) => ({
            ...prev,
            goalPoint: { ...prev.goalPoint, x: p5.mouseX, y: p5.mouseY },
          }));
          break;
        default:
          return;
      }
    }

    /**
     *
     * @param {*} p5 The P5 instance passed in that allows us to draw everything
     */
    function setup(p5) {
      const canvas = p5.createCanvas(W, H);

      canvas.mousePressed(handleMouseClicked);
      p5.background(55);

      // Draw the rrt graph if its not undefined
      // Draw Start and Goal as green
      if (sketchState && rrtState) {
        drawStartandGoal();
        //   Draw Obstacles in red
        drawRRTPoints();
        drawObstacles();
      }
      if (rrtState) {
      }
    }

    // Set all of the p5 objects important functions here
    p5.setup = () => setup(p5);
    // p5.mousePressed = () => handleMouseClicked();
  };
}
