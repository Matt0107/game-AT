class Player {
  constructor() {
    this.width = 170;
    this.height = 200;
    this.x = 360;
    this.y = 800 - this.height;
  }
  draw() {
    image(game.desktopPlayer, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    if (this.x >= 100) {
      this.x -= 100;
    }
  }
  moveRight() {
    if (this.x <= 800) {
      this.x += 100;
    }
  }
}
