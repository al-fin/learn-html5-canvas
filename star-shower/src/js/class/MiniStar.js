import utils from "../utils";
import { canvas, c } from "../variables.js";

export default class MiniStar {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: utils.randomIntFromRange(-5, 5),
      y: utils.randomIntFromRange(-15, 15),
    };
    this.friction = 0.5;
    this.gravity = 0.5;
    this.ttl = 100;
    this.opacity = 1;
  }

  draw() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = `rgba(255,255,255,${this.opacity})`;
    c.shadowBlur = 20;
    c.fillStyle = `rgba(255,255,255,${this.opacity})`;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    if (this.y + this.radius + this.velocity.y > canvas.height) {
      this.velocity.y = -this.velocity.y * this.friction;
    } else {
      this.velocity.y += this.gravity;
    }

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl -= 1;
    this.opacity -= 1 / this.ttl;
  }
}
