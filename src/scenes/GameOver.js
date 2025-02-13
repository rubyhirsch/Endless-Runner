class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver')
    }

    preload() {
        this.load.image("gameOver", "assets/game_over.png");
    }

    create() {

        // add tutorial 
        let tutorialScreen = this.add.sprite(0, 0, 'gameOver').setOrigin(0, 0)


         // menu scene config
         let menuLook = {
            fontFamily: 'Courier',
            fontSize: '50px',
            backgroundColor: '#6a9172',
            color: '#3a6443',
            align: 'center',
        }   

        let oneMenuLook = {
            fontFamily: 'Courier',
            fontSize: '50px',
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
        this.add.text(centerX + 350, centerY - 300, ' Game Over: You Died! ', oneMenuLook).setOrigin(0.5)

         // add text for directions
         this.add.text(game.config.width/2 + 350, 250, ' Press [M] for Menu ', twoLook).setOrigin(0.5)
         this.add.text(game.config.width/2 + 350, 350, ' Press [SPACE] to Restart ', twoLook).setOrigin(0.5)
         this.add.text(game.config.width/2 + 350, 450, ' Press [C] for Credits', twoLook).setOrigin(0.5)
     
         // define M R C keys
          this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
          this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
          this.keyC= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)

    }

    update() {
        // check for M input for menu
        if (Phaser.Input.Keyboard.JustDown(this.keyM)) {
            this.scene.start('menuScene')
            //this.sound.play('st')
        }

        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.scene.start('playScene')
            //this.sound.play('st')
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyC)) {
            this.scene.start('CreditScreen')
            //this.sound.play('st')
        }
    }
}

