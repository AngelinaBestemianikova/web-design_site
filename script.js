let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function draw() {
  let width = window.innerWidth;
  let height = document.documentElement.clientHeight;
  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "#FFFFF4";

  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  let amplitude = -90; // Амплитуда волны
  let frequency = 0.005; // Частота волны

  for (let x = 0; x < width; x++) {
    let y = Math.sin(x * frequency) * amplitude;
    ctx.lineTo(x, y + height / 2);
  }

  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.lineTo(0, height / 2);

  ctx.fill();
}

draw();

window.addEventListener("resize", draw);