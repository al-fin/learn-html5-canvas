const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const ctx = canvas.getContext('2d');


function Wave() {
  let increment = 0;
  this.draw = function () {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
      const plus = Math.sin(i * 0.009 + increment) * 150 * Math.sin(increment)
      // console.log(plus)
      ctx.lineTo(i, canvas.height / 2 + plus);
    }

    ctx.strokeStyle = `hsl(${Math.abs(Math.sin(increment) * 255)}, 50%, 50%)`;
    ctx.stroke()
    ctx.closePath()
  }
  this.update = function () {
    this.draw()
    increment += 0.009
  }
}


const wave = new Wave()

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0,0,0,0.01)'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  wave.update()
}

ctx.fillRect(0, 0, canvas.width, canvas.height);
animate()
