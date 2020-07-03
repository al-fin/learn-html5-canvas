const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.stroke()
  }
  this.update = function () {
    this.draw();

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'cyan', 'orange', 'pink', 'aqua', 'maroon', 'royalblue', 'teal']

const circles = [];

for (let i = 1; i <= 100; i++) {
  const i = Math.floor(Math.random() * colors.length);
  const radius = (Math.random() * 50) + 2;
  const x = Math.random() * (canvas.width - (radius * 2)) + radius;
  const y = Math.random() * (canvas.height - (radius * 2)) + radius;
  const dx = Math.floor(Math.random() * 3) + 1;
  const dy = Math.floor(Math.random() * 3) + 1;
  const circle = new Circle(x, y, dx, dy, radius, colors[i]);
  circles.push(circle)
}

console.log(circles)

function draw() {
  requestAnimationFrame(draw);
  console.log('rerender')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgb(6, 7, 34)';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let i = 1; i <= 100; i++) {
    circles[i].update()
  }
}

draw()