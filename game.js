class Game {
  constructor() {
    this.player = new Player();
    this.feed = [];
    this.ball = new Ball();
  }

  preload() {
    this.desktopPlayer = loadImage("./assets/player-right.png");
    this.trainer = loadImage("./assets/trainer.png");
    this.ball.image = loadImage("./assets/ball.png");
  }
  draw() {
    this.player.draw();

    image(game.trainer, 360, -40, 170, 200);
    this.ball.draw();
  }
}
