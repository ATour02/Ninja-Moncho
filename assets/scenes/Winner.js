export default class Winner extends Phaser.Scene {
  constructor() {
    super("Winner");
  }

  init() {}

  preload() {
    this.load.image("win","./assets/images/win.png");
  }

  create() {
    this.scoreText = this.add.text(310, 500, "Has ganado!!", {
      fontSize: "30px",
      fill: "#37EAE0",
    });
    this.add.image(430, 250, "win").setScale(0.555);
  }

  update() {}
}