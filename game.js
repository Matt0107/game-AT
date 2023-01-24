class Game {
  constructor() {
    this.player;
    this.trainer;
  }

  preload() {
    this.player = loadImage("./assets/enemy-jag.png");
    this.trainer = loadImage("./assets/hero-jag.png");
  }
  draw() {
    clear();
    this.player.draw();
    this.trainer.draw();
  }
}
