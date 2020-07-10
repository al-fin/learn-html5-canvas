import { canvas, c, stars } from "./variables.js";
import Star from "./class/Star.js";

export function dropStar(x = null, y = null) {
  const radius = 15;
  stars.push(
    new Star(
      x === null ? Math.max(radius, Math.random() * canvas.width + radius) : x,
      y === null ? 0 : y,
      radius,
      "rgba(255,255,255, 1)"
    )
  );
}

export function createMountain(amount, height, color) {
  const mountainWidth = canvas.width / amount;
  for (let i = 0; i < amount; i++) {
    c.beginPath();
    c.moveTo(i * mountainWidth, canvas.height);
    c.lineTo(i * mountainWidth + 400 + mountainWidth, canvas.height);
    c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
    c.lineTo(i * mountainWidth - 400, canvas.height);
    c.fillStyle = color;
    c.fill();
    c.closePath();
  }
}
