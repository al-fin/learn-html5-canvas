import { canvas, c, backgroundStars, stars, miniStars } from "./variables";
import { dropStar, createMountain } from "./functions.js";
import Star from "./class/Star.js";

canvas.width = innerWidth;
canvas.height = innerHeight;

// if window resized
addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// if user click the screen
canvas.addEventListener("click", (e) => {
  dropStar(e.clientX, e.clientY);
});

function init() {
  // draw star background
  for (let i = 0; i < 100; i++) {
    const radius = Math.random() * 2;
    backgroundStars.push(
      new Star(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        radius,
        `rgba(255,255,255, ${Math.random()})`
      )
    );
  }
}

// Animation Loop
let frame = 0;
function animate() {
  requestAnimationFrame(animate);

  const nightSky = c.createLinearGradient(0, 0, 0, canvas.height);
  nightSky.addColorStop(1, "#171e26");
  nightSky.addColorStop(0, "#3f586b");

  c.fillStyle = nightSky;
  c.fillRect(0, 0, canvas.width, canvas.height);

  backgroundStars.forEach((backgroundStar) => {
    backgroundStar.draw();
  });

  // draw mountain
  createMountain(1, canvas.height - 100, "#293B47");
  createMountain(2, canvas.height - 175, "#283843");
  createMountain(3, canvas.height - 200, "#26333e");

  stars.forEach((star, index) => {
    star.update();
    if (star.radius < 0) {
      stars.splice(index, 1);
    }
  });

  miniStars.forEach((miniStar, index) => {
    miniStar.update();
    if (miniStar.ttl === 0) {
      miniStars.splice(index, 1);
    }
  });

  frame++;
  if (frame % 50 === 0) {
    dropStar();
  }
}

init();
animate();
