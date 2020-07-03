const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const ctx = canvas.getContext('2d');

const gravity = 1;
const friction = 0.9;

function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke()
  }
  this.update = function () {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}


const balls = [];

for (let i = 0; i < 250; i++) {
  const radius = Math.random() * 30 + 10;
  const x = Math.floor(Math.random() * (canvas.width - (radius * 2)) + radius)
  const y = (Math.random() * canvas.height - radius) - 150;
  const dx = (Math.random() * 4) + -2;
  const dy = 2;
  const ball = new Ball(x, y, dx, dy, radius, '#f00');
  balls.push(ball);
}


function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = 'rgb(6, 7, 34)';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < balls.length; i++) {
    balls[i].update()
  }
}

draw()