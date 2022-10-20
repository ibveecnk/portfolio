/*
 * Code that renders the page background
 */

// Background parameters
const PIXELSIZE = 20,
  LIGHTRADIUS = 150,
  STEP = 0.1,
  ILLUMINATION = 20,
  BASEBRIGHTNESS = 10;

let mouseX, mouseY;
let mouseOver = true;

let colorOffset = 0;

let numTilesX, numTilesY, tileWidthX, tileWidthY;

const setCanvasDimensions = () => {
  const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");
  if (!ctx || !window.visualViewport) return;

  canvas.width = window.window.innerWidth;
  canvas.height = window.window.innerHeight;

  numTilesX = Math.ceil(canvas.width / PIXELSIZE);
  numTilesY = Math.ceil(canvas.height / PIXELSIZE);

  tileWidthX = canvas.width / numTilesX;
  tileWidthY = canvas.height / numTilesY;
};

const draw = () => {
  const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");
  if (!ctx || !window.visualViewport) return;

  colorOffset += STEP;

  for (let i = 0; i < numTilesX; i++) {
    for (let j = 0; j < numTilesY; j++) {
      let tileDistanceToMousePointer = Math.sqrt(
        (i * tileWidthX - mouseX) ** 2 + (j * tileWidthY - mouseY) ** 2
      );

      let tileBrightness =
        mouseOver &&
        !!tileDistanceToMousePointer &&
        mouseX !== null &&
        mouseY !== null
          ? (ILLUMINATION * (LIGHTRADIUS - tileDistanceToMousePointer)) /
            LIGHTRADIUS
          : 0;
      tileBrightness <= 0 ? (tileBrightness = 0) : null;
      tileBrightness += BASEBRIGHTNESS; // minimum brightness

      let color = `hsl(${
        Math.cos((i + j) / 2 + colorOffset) * 20 + 238
      }, 60%, ${tileBrightness}%)`;

      ctx.fillStyle = color;
      ctx.fillRect(i * tileWidthX, j * tileWidthY, tileWidthX, tileWidthY);
    }
  }
  ctx.stroke();
};

const initCanvas = () => {
  setCanvasDimensions();
  const wrapper = document.getElementById("contentWrapper");

  wrapper.addEventListener("mouseleave", () => {
    mouseOver = false;
  });
  wrapper.addEventListener("mouseenter", () => {
    mouseOver = true;
  });

  window.addEventListener("resize", setCanvasDimensions);
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  setInterval(draw, 1000 / 24); // 24 fps
};

initCanvas();
