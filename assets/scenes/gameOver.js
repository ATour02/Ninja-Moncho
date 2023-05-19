export default class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  init() {}

  preload() {
    this.load.image("gameover", "./assets/images/gameover.png");
  }

  create() {
    
    this.add.image(390,300,"gameover").setScale(1.2)
  }

  update() {}
}
