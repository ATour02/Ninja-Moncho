export default class MenúPrincipal extends Phaser.Scene {
  constructor() {
    super("MenúPrincipal");
  }
  
  init(){}

  preload(){
      this.load.image("FondoMenu", "./assets/images/FondoMenu.jpg");
      this.load.image("botoninicio","./assets/images/botoninicio.png");
      this.load.image("ninja","./assets/images/Ninja.png");
      this.load.image("Titulo","./assets/images/Title2.png");
      
  }
  create(){
      this.add.image(400,300,"FondoMenu");
      this.add.image(390,300,"ninja").setScale(2.3);
      this.add.image(390,180,"Titulo").setScale(0.8);
      

      const startButton=this.add.image(390,450,"botoninicio").setScale(0.4).setInteractive();
      startButton.on("pointerover", () => {
  
  startButton.setTint(0x0000ff);
});

startButton.on("pointerout", () => {
  
  startButton.clearTint();
});
       startButton.on("pointerup", () => {
          this.scene.start("Game");
      })
   }  
}  