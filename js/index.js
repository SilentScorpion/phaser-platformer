
class Splash extends Phaser.Scene {

    constructor(){
        super('Splash');
    }

    preload(){
        this.loadImage();
        this.loadAudio();
        this.loadScripts();
        //Creating a progress bar
      
        var progressBar = this.add.graphics();
          this.load.on('progress' , (value) => {
            progressBar.clear();
            progressBar.fillStyle(0x000000, 1);
          //  console.log(value);
            progressBar.fillRect(game.config.width/2 - 100,  game.config.height/2,  200 * value, 25);
        });

        this.load.on('fileprogress' , (file) => {
          console.log(file.src);
        });

        this.load.on('complete' , () => {
            progressBar.destroy();
            
        
            this.scene.add('Menu',config, true);
          //  this.scene.start('Menu');
            console.log('exiting splash scene');

        });

      
    }

    
    loadImage(){
        this.load.image('background','assets/images/background.jpg');
       
    }

    loadAudio(){
        this.load.audio('bckAudio','assets/audio/bck.mp3');
    }

    loadScripts(){
        this.load.script('Menu','js/menu.js');
    }


}



const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xffffff,
    scene: [Splash],
    scale:{
        parent: 'knightgame',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

var game = new Phaser.Game(config);

