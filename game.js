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
    this.ballSpeed += 0.003;
    // this.player.draw();
    if (this.player.lives > 0 && this.player.score < 1000) {
      this.player.draw();
      this.ball.draw();
      if (frameCount % 150 === 0) {
        this.feeds.push(new Ball(this.ball.image, this.ballSpeed));
        console.log(this.ball.ballX);
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

    image(game.trainer, 360, -40, 170, 200);

    if (this.player.score >= 1000) {
      textSize(30);
      text("You won", 380, 350);
    } else if (this.player.lives === 0) {
      textSize(30);
      text("You lost", 380, 350);
    }
  }
}
