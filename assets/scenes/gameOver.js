export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  init() {}

  preload() {
    this.load.image("gameover", "./assets/images/gameover.jpg");
  }

  create() {
    
    this.add.image(390,300,"gameover").setScale(1)
  }

  update() {}
}
