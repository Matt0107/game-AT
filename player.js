class Player {
  constructor() {
    this.width = 170;
    this.height = 200;
    this.x = 360;
    this.y = 800 - this.height;
    this.score = 0;
    this.lives = 3;
  }
  draw() {
    image(game.desktopPlayer, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    if (this.x >= 50) {
      this.x -= 50;
    }
  }
  moveRight() {
    if (this.x <= 600) {
      this.x += 50;
    }
  }
}
