class Car {

    // Declare instance variables 
    speed = 0;                      // Car scalar speed
    phi = 0;                        // Wheel angle
    phi_dot = 0;                    // Rate of change of wheel angle

    max_steer = 0.5;     // Wheel rotation limit
    max_speed = 4;       // Arbitrary choice for max car speed

    theta_dot = 0;           // Rate of change of orientation

     car_len = 50;             // Length of car
     car_wid = this.car_len / 2.5;  // Width of car
     tyre_wid = this.car_wid / 7;
     tyre_len = this.car_len / 6.6;


    constructor(x_, y_, theta_, p5) {
        this.loc = p5.createVector(x_, y_) // Location <x, y>
        this.vel = p5.createVector(1, 1)   // Velocity <x, y> 
        this.theta = theta_
        this.p5 = p5
    }



    run() {

        this.display();
        this.move();
    }

    display() {

        this.p5.translate(this.loc.x, this.loc.y);   // Move to ref frame of the car (car center is now <0, 0>)
        this.p5.rotate(this.theta);             // Rotate reference frame to match car orientation

        this.draw_car_body();           // draw main car body + back wheels 
        this.draw_front_wheels()

    }


    draw_car_body() {
        // Car body
        this.p5.stroke(0);
        this.p5.strokeWeight(2);
        this.p5.fill(150);
        let top_x = -this.car_len / 2;
        let top_y = -this.car_wid / 2;
        this.p5.rect(top_x, top_y, this.car_len, this.car_wid, 10);   // car body

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

        let front_center_x = this.car_len / 2 - this.tyre_len / 2 - this.tyre_len / 3;
        let top_front_center_y = -this.car_wid / 2 + this.tyre_wid;
        let btm_front_center_y = this.car_wid / 2 - this.tyre_wid;

        this.p5.push();
        this.p5.translate(front_center_x, top_front_center_y);
        this.p5.rotate(this.phi);
        this.p5.rect(-this.tyre_len / 2, -this.tyre_wid / 2, this.tyre_len, this.tyre_wid, 5);
        this.p5.pop();


        this.p5.push();
        this.p5.translate(front_center_x, btm_front_center_y);
        this.p5.rotate(this.phi);
        this.p5.rect(-this.tyre_len / 2, -this.tyre_wid / 2, this.tyre_len, this.tyre_wid, 5);
        this.p5.pop();
    }


    move() {
        if (this.speed > this.max_speed) this.speed = this.max_speed
        if (this.phi > this.max_steer) this.phi = this.max_steer
        if (this.phi < -this.max_steer) this.phi = -this.max_steer

        this.vel.x = this.speed * Math.cos(this.theta)
        this.vel.y = this.speed * Math.sin(this.theta)
        this.theta_dot = this.speed * Math.tan(this.phi) / this.car_len
        this.theta += this.theta_dot;
        this.loc.add(this.vel)
        this.dont_crash()
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


}

export default Car