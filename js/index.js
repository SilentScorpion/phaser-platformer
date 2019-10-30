
class Splash extends Phaser.Scene {

    constructor(){
        super('Splash');
    }

    preload(){
        this.loadImage();
        this.loadAudio();
        this.loadScripts();
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

    create(){
    
        this.bck = this.add.image(game.config.width/2, game.config.height/2,'background');
        this.bck.displayWidth = game.config.width;
        this.bck.displayHeight = game.config.height;

        
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

