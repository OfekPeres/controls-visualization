class Car {
  // Instance variables
  speed = 0; // Car scalar speed
  phi = 0; // Wheel angle
  phi_dot = 0; // Rate of change of wheel angle

  max_steer = 0.5; // Wheel rotation limit
  max_speed = 2; // Arbitrary choice for max car speed

  theta_dot = 0; // Rate of change of orientation

  // Car dimensions
  car_len = 50;
  car_wid = this.car_len / 2.5;
  tyre_wid = this.car_wid / 7;
  tyre_len = this.car_len / 6.6;

  constructor(x_, y_, theta_, p5) {
    this.loc = p5.createVector(x_, y_); // Location vector
    this.vel = p5.createVector(1, 1); // Velocity vector
    this.theta = theta_; // Starting angle (0 = right, pi/2 = down, pi = left, 3pi/2 = up)
    this.p5 = p5; // Import p5 instance
  }

  run() {
    this.display();
    this.move();
  }

  display() {
    this.p5.push();
    this.p5.translate(this.loc.x, this.loc.y); // Move to ref frame of the car (car center is now <0, 0>)
    this.p5.rotate(this.theta); // Rotate reference frame to match car orientation

    this.draw_car_body(); // draw main car body + back wheels
    this.draw_front_wheels(); // draw fron wheels angled by (phi)
    this.p5.pop();
  }

  draw_car_body() {
    // Car body
    this.p5.stroke(0);
    this.p5.strokeWeight(2);
    this.p5.fill(150);
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
  }

  move() {
    // Checks we within driving constraints
    if (this.speed > this.max_speed) this.speed = this.max_speed;
    if (this.speed < -this.max_speed) this.speed = -this.max_speed;
    if (this.phi > this.max_steer) this.phi = this.max_steer;
    if (this.phi < -this.max_steer) this.phi = -this.max_steer;

    // Update velocity, theta and location
    this.vel.x = this.speed * Math.cos(this.theta);
    this.vel.y = this.speed * Math.sin(this.theta);
    this.theta_dot = (this.speed * Math.tan(this.phi)) / this.car_len;
    this.theta += this.theta_dot;
    this.theta = this.theta % (2*this.p5.PI)
    this.loc.add(this.vel);
    this.dont_crash();
  }

  // Width and height (600) are hard-coded magic numbers atm.
  dont_crash() {
    if (this.loc.x < 0) {
      this.loc.x = 0;
      this.speed = 0;
    }

    if (this.loc.x > 600) {
      this.loc.x = 600;
      this.speed = 0;
    }

    if (this.loc.y < 0) {
      this.loc.y = 0;
      this.speed = 0;
    }

    if (this.loc.y > 600) {
      this.loc.y = 600;
      this.speed = 0;
    }
  }

  track(targetX, targetY, targetRadius) {
    const deltaX = targetX - this.loc.x;
    const deltaY = targetY - this.loc.y;
    const targetTheta = Math.atan(deltaY / deltaX);

    let thetaRelativeToHorizontal = 0;
    if (deltaX > 0 && deltaY > 0) {
      thetaRelativeToHorizontal = this.p5.PI + targetTheta;
      
    } 
    else if (deltaX > 0 && deltaY < 0) {
        thetaRelativeToHorizontal = this.p5.PI - targetTheta;
    }

    else if (deltaX < 0 && deltaY > 0) {
        thetaRelativeToHorizontal = -targetTheta;
    }
    else if (deltaX < 0 && deltaY < 0) {
        thetaRelativeToHorizontal = targetTheta;
    }
    
    console.log(this.theta)
    const error = this.theta - thetaRelativeToHorizontal
    const data = { carX: this.loc.x, carY: this.loc.y };
    // console.log(data);
    if (this.theta > thetaRelativeToHorizontal) {
      this.phi = this.max_steer;
    } else if (this.theta < thetaRelativeToHorizontal) {
      this.phi = -this.max_steer;
    } else {
      this.phi = 0;
    }

    if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      this.speed = 0;
    } else {
      this.speed = 1;
    }
  }
}

export default Car;
