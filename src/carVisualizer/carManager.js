export default class CarManager {
  constructor(pCar, pSketchState, pP5) {
    this.car = pCar;
    this.p5 = pP5;
    this.controlIndex = 0;
    this.sketchState = pSketchState;
    this.currentSteer = 0;
    this.currentPathIndex = 0;
    this.paths = null;
    this.reachedGoal = false
    this.pidWayPointIndex = 0
    this.pidDubinsWayPointIndex = 0
  }

  step() {
    if (!this.paths) {
      this.car.display();
      return;
    }
    if (this.currentPathIndex > this.paths.length - 1) {
      this.car.display();
      this.car.setSpeed(0)
      this.car.steer(0)
      this.reachedGoal = true
      return;
    }

    // Set the initial steering for first set of steps
    if (this.currentPathIndex === 0 && this.controlIndex === 0) {
      this.setSteeringForNewPath(this.paths[this.currentPathIndex]);
    }
    const path = this.paths[this.currentPathIndex];
    // Second to last step should be handled specially because of partial step size
    if (this.controlIndex == Math.floor(path.numSteps)) {
      //   Scale speed down to a fraction of the car speed for the final time step
      const newSpeed =
        this.sketchState.carSpeed * (path.numSteps - this.controlIndex);
      this.car.setSpeed(newSpeed);
      this.car.steer(this.currentSteer);
      this.controlIndex++;
    }
    // The "normal" step
    else if (this.controlIndex < Math.floor(path.numSteps)) {
      this.car.setSpeed(this.sketchState.carSpeed);
      this.car.steer(this.currentSteer);
      this.controlIndex++;
    }
    // Move to next path in Paths if there is any
    else {
      this.controlIndex = 0;
      this.currentPathIndex++;
      this.setSteeringForNewPath(this.paths[this.currentPathIndex]);
    }
    this.car.run();
  }

  /**
   *
   * @param {*} pPaths a list of the form [{
   *  direction: "LEFT" | "RIGHT" | "STRAIGHT",
   * numSteps: float
   *
   * }]
   */
  setPaths(pPaths) {
    this.paths = pPaths;
  }
  /**
   *
   * @param {*} path a dictionary of the form {
   *  direction: "LEFT" | "RIGHT" | "STRAIGHT",
   * numSteps: float
   *
   * }
   */
  setSteeringForNewPath(path) {
    if (!path) return;
    let steering = 0; // go straight
    if (path.direction === 'LEFT') {
      steering = this.car.max_steer;
    } else if (path.direction === 'RIGHT') {
      steering = -this.car.max_steer;
    } else if (path.direction === 'STRAIGHT') {
      steering = 0;
    }
    this.currentSteer = steering;
  }

  setpidWaypoints()
  {
    
  }
  dist(p1,p2)
  {
    return Math.sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y))
  }
  pidTrackPoseWayPoints()
  {
    const dist2goal = 5
    if (this.pidWayPointIndex >= this.sketchState.poseWayPoints.length) 
    {
      this.car.display();
      this.car.setSpeed(0)
      this.car.steer(0)
      this.reachedGoal = true
      return
    }
    const curWayPoint = this.sketchState.poseWayPoints[this.pidWayPointIndex]
    this.car.track(curWayPoint.x, curWayPoint.y, dist2goal)
    const dist = this.dist(curWayPoint, this.car.loc)
    console.log(dist)
    if (dist <= dist2goal)
    {
      this.pidWayPointIndex++;
    }
    this.car.run();
  }
  pidTrackDubinsWayPoints()
  {
    const dist2goal = 2
    if (this.pidDubinsWayPointIndex >= this.sketchState.positionWayPoints.length) 
    {
      this.car.display();
      this.car.setSpeed(0)
      this.car.steer(0)
      this.reachedGoal = true
      return
    }
    const curWayPoint = this.sketchState.positionWayPoints[this.pidDubinsWayPointIndex]
    this.car.track(curWayPoint.x, curWayPoint.y, dist2goal)
    const dist = this.dist(curWayPoint, this.car.loc)
    console.log(dist)
    if (dist <= dist2goal)
    {
      this.pidDubinsWayPointIndex++;
    }
    this.car.run();
  }
}
