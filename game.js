class Game {
  constructor() {
    this.player = new Player();
    this.feeds = [];
    this.ball = new Ball();
    this.ballSpeed = 0.1;
  }

  preload() {
    this.desktopPlayer = loadImage("./assets/player-right.png");
    this.trainer = loadImage("./assets/trainer.png");
    this.ball.image = loadImage("./assets/ball.png");
  }
  draw() {
    this.ballSpeed += 0.0008;
    this.player.draw();

    image(game.trainer, 360, -40, 170, 200);
    this.ball.draw();

    if (frameCount % 150 === 0) {
      this.feeds.push(new Ball(this.ball.image, this.ballSpeed));
    }
    this.feeds.forEach(function (feed) {
      feed.draw();
    });

    this.feeds = this.feeds.filter((feed) => {
      console.log(this);

      if (feed.collision(this.player) || feed.x < 0 - feed.width) {
        return true;
      } else {
        return false;
      }
    });
  }
}
