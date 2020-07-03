const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const ctx = canvas.getContext('2d');

function getDistance(x1, y1, x2, y2) {
  const distanceX = x2 - x1;
  const distanceY = y2 - y1;
  const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  return distance;
}

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.radius = radius;
  this.mass = 1;
  this.velocity = {
    x: (Math.random() * 0.5) * 10,
    y: (Math.random() * 0.5) * 10,
  }
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore()
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
  this.update = function () {
    this.draw()

    for (let i = 0; i < particles.length; i++) {
      if (particles[i] === this) continue;
      if (getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
        resolveCollision(this, particles[i])
      }
    }

    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.velocity.x = -this.velocity.x
    }
    if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
      this.velocity.y = -this.velocity.y
    }

    this.x += this.velocity.x
    this.y += this.velocity.y
  }
}

let particles = [];

function init() {
  for (let i = 0; i < 30; i++) {
    const radius = 30;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;

    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = Math.random() * (canvas.width - radius * 2) + radius;
          y = Math.random() * (canvas.height - radius * 2) + radius;

          j = -1;
        }
      }
    }
    const colors = [
      '#2185c5',
      '#ffca28',
      '#ff7f66'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particle = new Particle(x, y, radius, color);
    particles.push(particle);
  }
}


function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = 'rgb(6, 7, 34)';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  particles.forEach(particle => {
    particle.update()
  })
}

init()
draw()