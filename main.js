let bg;
function preload() {
  bg = loadImage("./assets/terrain.png");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(bg);
}

function keyPressed() {
  if (keyCode === 39) {
    game.player.moveRight();
  }

  if (keyCode === 37) {
    game.player.moveLeft();
  }

  if (keyCode === 32) {
    game.player.hit();
  }
}
