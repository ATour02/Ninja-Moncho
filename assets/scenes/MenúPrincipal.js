export default class MenúPrincipal extends Phaser.Scene {
  constructor() {
    super("MenúPrincipal");
  }
  
  init(){}

  preload(){
      this.load.image("FondoMenu", "./assets/images/FondoMenu.jpg");
      this.load.image("botoninicio","./assets/images/botoninicio.png");
      this.load.image("katana","./assets/images/Katana.png");
      this.load.image("Titulo","./assets/images/Title2.png");
      
  }
  create(){
      this.add.image(400,300,"FondoMenu");
      this.add.image(380,250,"katana").setScale(0.3);
      this.add.image(390,100,"Titulo").setScale(2);
      

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