export default function rrtSketchFunction(
  rrtState,
  sketchState,
  setSketchState,
  menuValue,
  shouldAnimate
) {
  return (p5) => {
    // Define some sketch constants
    const W = sketchState.canvasWidth;
    const H = sketchState.canvasHeight;
    // Define some colors
    const green = p5.color(0, 255, 0);
    const blue = p5.color(0, 50, 255);
    const red = p5.color(255, 50, 10);

    // RRT Animation values
    let explorationIndex = 0;
    let isExplorationComplete = false;
    let goalPathNodes = [];
    // Collect the goal path as an array that can be iterated over backwards to
    // go from start to goal
    if (rrtState) {
      let goalNode = rrtState.points[rrtState.targetNodeIndex];
      while (goalNode) {
        goalPathNodes.push(goalNode);
        goalNode = rrtState.points[goalNode.parentIndex];
      }
    }
    let goalPathDrawingIndex = goalPathNodes.length - 1;

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

    function animateRRTExploration() {
      p5.stroke(blue);
      p5.strokeWeight(2);
      const point = rrtState.points[explorationIndex];
      p5.fill(green);
      p5.circle(point.x, point.y, 3);
      if (point.parentIndex !== -1) {
        const parent = rrtState.points[point.parentIndex];
        p5.line(point.x, point.y, parent.x, parent.y);
      }

      if (explorationIndex < rrtState.points.length - 1) explorationIndex++;
      else {
        isExplorationComplete = true;
      }
    }
    function animateRRTGoalPath() {
      if (!isExplorationComplete) return;
      // Draw Goal Path
      const point = goalPathNodes[goalPathDrawingIndex];

      p5.stroke(green);
      p5.strokeWeight(3);
      const nextNode = goalPathNodes[goalPathDrawingIndex - 1];

      p5.line(point.x, point.y, nextNode.x, nextNode.y);
      if (goalPathDrawingIndex > 1) {
        goalPathDrawingIndex--;
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
            p5.circle(obs.x, obs.y, obs.r * 2);
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

      p5.circle(xstart, ystart, startRadius * 2);
      p5.noStroke();
      p5.fill(blue);
      p5.circle(xgoal, ygoal, goalRadius * 2);
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
     * The setup function for the sketch
     */
    function setup() {
      const canvas = p5.createCanvas(W, H);
      // p5.frameRate(1)
      canvas.mousePressed(handleMouseClicked);
      p5.background('#747474');

      if (sketchState) {
        // Draw Start and Goal as green
        drawStartandGoal();
      }
      if (rrtState) {
        // Draw the rrt graph
        if (!shouldAnimate) {
          drawRRTPoints();
        }
      }
      //   Draw Obstacles in red
      drawObstacles();
    }
    /**
     *
     * The draw function for the sketch
     */

    function draw() {
      if (shouldAnimate && rrtState && sketchState) {
        animateRRTExploration();
        animateRRTGoalPath();
      }
    }

    // Set all of the p5 objects important functions here
    p5.setup = setup;
    p5.draw = draw;
  };
}
