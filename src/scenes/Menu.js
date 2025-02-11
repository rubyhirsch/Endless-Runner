class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        
        this.load.image("GameOver", "assets/game_over.png")

        this.load.spritesheet('title', 'assets/sprite_sheet.png', {
            frameWidth: 1680,
            frameHeight: 900
        })

        //this.load.audio("bgMusic", "assets/BackgroundMusic.mp3");
        //this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    create() {
        //create title screen
        let titleScreen = this.add.sprite(0, 0, 'title').setOrigin(0, 0)

        titleScreen.anims.create({
            key: 'blink',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('title', {
                start:0,
                end: 1
            })
        })
        titleScreen.anims.play('blink')

        // menu scene config
        let titleConfig = {
            fontFamily: 'Courier',
            fontSize: '55px',
            color: 'white',
            align: 'center',
        }   
        
        let descriptConfig = {
            fontFamily: 'Courier',
            fontSize: '30px',
            color: 'white',
            align: 'center',
        }



        // add title text
        this.add.text(centerX + 350, centerY - 300, 'Contagion Crosser', titleConfig).setOrigin(0.5)

        // add descriptor
        this.add.text(centerX + 360, centerY - 250, 'Press [SPACE] to begin!', descriptConfig).setOrigin(0.5)
    }

}