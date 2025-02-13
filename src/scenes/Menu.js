class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        
        this.load.image("GameOver", "assets/game_over.png")

        this.load.spritesheet('menu', './assets/sprite_sheet.png', {
            frameWidth: 1680,
            frameHeight: 900
        })

         //loading moving tile
        this.load.image('blood', './assets/blood_bath.png')
        this.load.image('virus', './assets/virus_sprite.png')
        this.load.image('mask', './assets/mask_sprite.png')
        
        //this.load.image("imageTest", "./assets/character_sprite_sheet.png")

        //loading animated spritesheet for character
        this.load.spritesheet('characterSprite', './assets/character_sprite_sheet.png', {
            frameWidth: 159,
            frameHeight: 145 
        })

        // whish sound https://freesound.org/people/moogy73/sounds/425706/
        this.load.audio('whish', 'assets/whish.wav')

        // sneeze sound https://freesound.org/people/unfa/sounds/181225/
        this.load.audio('sneeze', 'assets/sneezeOne.wav')

        // scream sound https://freesound.org/people/Kalibrk/sounds/339309/
        this.load.audio('scream', 'assets/scream.wav')

        // bg 'music' aka blood sounds https://freesound.org/people/Merrick079/sounds/567347/
        this.load.audio('bgm', 'assets/blood_sound.wav')

    }
    create() {
        //create menu screen
        let titleScreen = this.add.sprite(0, 0, 'menu').setOrigin(0, 0)

        titleScreen.anims.create({
            key: 'blink',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('menu', {
                start:0,
                end: 1
            })
        })
        titleScreen.anims.play('blink')



        // menu scene config
        let menuLook = {
            fontFamily: 'Courier',
            fontSize: '70px',
            backgroundColor: '#6a9172',
            color: '#3a6443',
            align: 'center',
        }   

        let oneMenuLook = {
            fontFamily: 'Courier',
            fontSize: '70px',
            backgroundColor: '#162a30',
            color: 'white',
            align: 'center',
        }
        
        let oneLook = {
            fontFamily: 'Courier',
            fontSize: '40px',
            backgroundColor: '#162a30',
            color: 'white',
            align: 'center',
        }

        let twoLook = {
            fontFamily: 'Courier',
            fontSize: '45px',
            backgroundColor: '#bec6c0',
            color: 'black',
            align: 'center',
        }



        // add title text
        this.add.text(centerX + 350, centerY - 300, ' Contagion Crosser ', oneMenuLook).setOrigin(0.5)

        // add descriptor
        this.add.text(centerX + 360, centerY - 200, ' Press [SPACE] to begin! ', twoLook).setOrigin(0.5)

        // add text for directions
        //this.add.text(game.config.width/2 + 350, 250, ' Press [M] for Menu ', oneLook).setOrigin(0.5)
        this.add.text(game.config.width/2 + 350, 450, ' Press [C] for Credits', oneLook).setOrigin(0.5)
        this.add.text(game.config.width/2 + 350, 350, ' Press [T] for Tutorial', oneLook).setOrigin(0.5)
        //this.add.text(game.config.width/2 + 350, 450, ' Press [R] to Restart ', oneLook).setOrigin(0.5)
    
        // define M R C keys
         //this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
         //this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
         this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T)
         this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
         this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

    }

    update() {
        // check for M input for menu
        //if (Phaser.Input.Keyboard.JustDown(this.keyM)) {
            //this.scene.start('titleScene')
            //this.sound.play('st')
        //}

        // check for R input for restart
        //if (Phaser.Input.Keyboard.JustDown(this.keyR)) {
          //  this.scene.start('playScene')
           // this.sound.play('st')
        //}

        // check for C input for restart
        if (Phaser.Input.Keyboard.JustDown(this.keyC)) {
            this.scene.start('CreditScreen')
            console.log("CreditCalled")
            //this.sound.play('st')
        }

        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            console.log("beforeplayscene")
            this.scene.start('playScene')
            console.log("placySceneCalled")
            //this.sound.play('st')
        }

       //'TutorialScreen'
        if (Phaser.Input.Keyboard.JustDown(this.keyT)) {
            console.log("Tut screen")
            this.scene.start('tutScreen')
            console.log("this is called, god help us all")
            //this.sound.play('st')
        }
        
      
    }
}

    
    

