import utils from "../utils";
import { canvas, c, miniStars } from "../variables.js";
import MiniStar from "./MiniStar.js";

export default class Star {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: utils.randomIntFromRange(-20, 20),
      y: 3,
    };
    this.friction = 0.75;
    this.gravity = 1;
  }

  draw() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.shadowBlur = 20;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();

    if (this.y + this.radius + this.velocity.y > canvas.height) {
      this.velocity.y = -this.velocity.y * this.friction;
      this.shatter();
      this.radius -= 3;
    } else {
      this.velocity.y += this.gravity;
    }

    if (
      this.x + this.radius + this.velocity.x > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x;
      this.shatter();
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  shatter() {
    for (let i = 0; i < 5; i++) {
      miniStars.push(new MiniStar(this.x, this.y, 2, "rgba(255,255,255,1)"));
    }
  }
}
