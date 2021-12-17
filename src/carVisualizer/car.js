class Car {
  // Instance variables
  speed = 0; // Car scalar speed
  phi = 0; // Wheel angle

  max_steer = 0.5; // Wheel rotation limit
  max_speed = 50; // Arbitrary choice for max car speed

  theta_dot = 0; // Rate of change of orientation

  constructor(x_, y_, theta_, phi_, length, color, car_ref, p5) {
    // Location vector
    this.loc = p5.createVector(x_, y_);
    // Velocity vector
    this.vel = p5.createVector(1, 1);
    // Starting angle (0 = right, pi/2 = down, pi = left, 3pi/2 = up)
    this.theta = theta_;
    this.p5 = p5; // utilize p5 instance passed in to car object
    // Car dimensions
    this.car_len = length;
    this.car_wid = this.car_len / 2.5;
    this.tyre_wid = this.car_wid / 7;
    this.tyre_len = this.car_len / 6.6;
    this.color = color;
    this.car_ref = car_ref;
    this.phi = phi_;
    this.shouldDrawImpossibleRegion = false;
  }
  /**
   * A function that manages running the car. Both displays the car and runs it
   * thru the dynamics
   */
  run() {
    this.display();
    this.move();
    if (this.car_ref) {
      this.car_ref.current = {
        x: this.loc.x,
        y: this.loc.y,
        theta: this.theta,
        phi: this.phi,
      };
    }
  }

  /**
   * A function to draw the car onto the screen with the correct position and
   * orientation
   */
  display() {
    this.p5.push();
    this.p5.translate(this.loc.x, this.loc.y); // Move to ref frame of the car (car center is now <0, 0>)
    this.p5.rotate(this.theta); // Rotate reference frame to match car orientation

    this.draw_car_body(); // draw main car body + back wheels
    this.draw_front_wheels(); // draw fron wheels angled by (phi)
    this.p5.pop();
  }

  /**
   * A Helper function to draw the body of the car
   */
  draw_car_body() {
    if (this.shouldDrawImpossibleRegion) this.drawImpossibleRegion();
    // Car body
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.fill(this.color);
    let top_x = -this.car_len / 2;
    let top_y = -this.car_wid / 2;
    this.p5.rect(top_x, top_y, this.car_len, this.car_wid, 10); // car body

    // Back Wheels
    this.p5.fill(0);
    this.p5.noStroke();
    let back_x = -this.car_len / 2 + this.tyre_len / 3;
    let top_back_y = -this.car_wid / 2 + 0.5 * this.tyre_wid;
    let btm_back_y = this.car_wid / 2 - 1.5 * this.tyre_wid;
    this.p5.rect(back_x, top_back_y, this.tyre_len, this.tyre_wid, 5);
    this.p5.rect(back_x, btm_back_y, this.tyre_len, this.tyre_wid, 5);
  }

  /**
   * A Helper function to draw the front wheels (with the correct phi angle)
   */
  draw_front_wheels() {
    this.p5.noStroke();
    this.p5.fill(0);

    let front_center_x =
      this.car_len / 2 - this.tyre_len / 2 - this.tyre_len / 3;
    let top_front_center_y = -this.car_wid / 2 + this.tyre_wid;
    let btm_front_center_y = this.car_wid / 2 - this.tyre_wid;

    // Front Left wheel
    this.p5.push();
    this.p5.translate(front_center_x, top_front_center_y);
    this.p5.rotate(this.phi);
    this.p5.rect(
      -this.tyre_len / 2,
      -this.tyre_wid / 2,
      this.tyre_len,
      this.tyre_wid,
      5
    );
    this.p5.pop();

    // Fron right wheel
    this.p5.push();
    this.p5.translate(front_center_x, btm_front_center_y);
    this.p5.rotate(this.phi);
    this.p5.rect(
      -this.tyre_len / 2,
      -this.tyre_wid / 2,
      this.tyre_len,
      this.tyre_wid,
      5
    );
    this.p5.pop();

    // Draw a vector to make it clear what direction the car is pointing
    this.p5.push();
    this.p5.stroke(220);
    this.p5.strokeWeight(1);
    this.p5.fill(180);
    this.p5.rotate(-this.p5.PI / 2);
    this.p5.line(0, 0, 0, this.car_len / 2);
    this.p5.translate(0, this.car_len / 2);
    this.p5.triangle(-5, 0, 0, 5, 5, 0);
    this.p5.pop();
  }

  /**
   *
   * @param {*} u The new steering angle of the car
   */
  steer(phi) {
    if (phi > this.max_steer) this.phi = this.max_steer;
    else if (phi < -this.max_steer) this.phi = -this.max_steer;
    else this.phi = phi;
  }

  /**
   *
   * @param {*} speed The new speed of the car
   */
  setSpeed(speed) {
    if (speed > this.max_speed) this.speed = this.max_speed;
    else if (speed < -this.max_speed) this.speed = -this.max_spee;
    else this.speed = speed;
  }
  /**
   * The dynamics of the car are encoded in this function. A call to move "steps"
   * the car forward in time once based on its current position, orientation,
   * and steering angle (phi)
   */
  move() {
    // Update velocity, theta and location

    this.vel.x = this.speed * Math.cos(this.theta);
    this.vel.y = this.speed * Math.sin(this.theta);
    this.theta_dot = (this.speed * Math.tan(this.phi)) / this.car_len;
    this.theta += this.theta_dot;
    this.loc.add(this.vel);
  }

  // Width and height (600) are hard-coded magic numbers atm.
  dont_crash() {
    if (this.loc.x < -this.car_len * 2) {
      this.loc.x = 0;
      this.speed = 0;
    }

    if (this.loc.x > 800) {
      this.loc.x = 600;
      this.speed = 0;
    }

    if (this.loc.y < -50) {
      this.loc.y = 0;
      this.speed = 0;
    }

    if (this.loc.y > 700) {
      this.loc.y = 600;
      this.speed = 0;
    }
  }

  track(targetX, targetY, dist2goal) {
    if (dist2goal == null || dist2goal == undefined) {
      dist2goal = 10;
    }
    for (let i = 0; i < 20; i++) {
      const deltaX = targetX - this.loc.x;
      const deltaY = targetY - this.loc.y;

      const heading = this.p5.createVector(
        this.p5.cos(this.theta),
        this.p5.sin(this.theta)
      );
      const car2goal = this.p5.createVector(deltaX, deltaY).normalize();

      const thetaError = heading.angleBetween(car2goal);

      if (thetaError > 0) {
        this.phi = this.max_steer;
      } else if (thetaError < 0) {
        this.phi = -this.max_steer;
      } else {
        this.phi = 0;
      }

      this.speed = 0.1;
      // if (Math.abs(deltaX) < dist2goal && Math.abs(deltaY) < dist2goal) {
      //   this.speed = 0;
      // } else {
      //   this.speed = 0.1;
      // }
      this.move();
    }
  }

  drawImpossibleRegion() {
    this.p5.noFill();
    this.p5.stroke('red');
    const radius = this.car_len / this.p5.tan(this.max_steer);
    this.p5.circle(0, radius, radius * 2);
    this.p5.circle(0, -radius, radius * 2);
  }

  getCarState() {
    return { x: this.loc.x, y: this.loc.y, theta: this.theta };
  }
}

export default Car;
