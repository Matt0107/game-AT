let randomFirst = 6;
let randomSecond = 2.5;

class Ball {
  constructor(image, speed) {
    this.image = image;
    this.width = 20;
    this.height = 20;
    this.x = 400;
    this.y = 60;
    this.velocity = 5;
    this.ballX = Math.floor(Math.random() * randomFirst) - randomSecond;
    this.speed = speed;
  }
  draw() {
    this.x += this.ballX + this.speed;
    this.y += this.velocity + this.speed;

    image(this.image, this.x, this.y, this.width, this.height);
  }
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;

    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) < 75) {
      playerInfo.score += 100;
      document.querySelector("#score span").innerText = playerInfo.score;
      return false;
    } else if (playerInfo.score === 300) {
      return text("You win", 10, 30);
    } else if (obstacleY > playerY + 100) {
      playerInfo.lives -= 1;
      document.querySelector("#lives span").innerText = playerInfo.lives;
      return false;
    } else if (playerInfo.lives === 0) {
      // return ctx.fillText(
      //   "GAME OVER",
      //   canvas.width / 2 - 100,
      //   canvas.height / 2
      // );
    } else {
      return true;
    }
  }
}
