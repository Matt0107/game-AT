class Ball {
  constructor() {
    this.width = 20;
    this.height = 20;
    this.x = 400;
    this.y = 60;
    this.image;
  }
  draw() {
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
