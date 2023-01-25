class Ball {
  constructor(image) {
    this.image = image;
    this.width = 20;
    this.height = 20;
    this.x = 400;
    this.y = 60;
    this.velocity = 5;
    // this.ballX = Math(random) * 3;
  }
  draw() {
    // this.x += this.ballX;
    this.y += this.velocity;
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
