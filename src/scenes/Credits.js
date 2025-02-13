class Credits extends Phaser.Scene {
    constructor() {
        super('CreditScreen')
    }

    preload() {
        this.load.image("creditImage", "assets/credits_image.PNG");
    }

    create() {

        // add credits 
        let creditsScreen = this.add.sprite(0, 0, 'creditImage').setOrigin(0, 0)


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

        let twoLookSmall = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#bec6c0',
            color: 'black',
            align: 'center',
        }
        
        // add title text
        this.add.text(centerX + 350, centerY - 300, ' Credits ', oneMenuLook).setOrigin(0.5)

        // add descriptor
        this.add.text(centerX + 360, centerY + 200, ' Programming and Art by Ruby Hirsch', twoLookSmall).setOrigin(0.5)
        this.add.text(centerX + 360, centerY + 250, ' "Short Sneeze" by unfa ', twoLookSmall).setOrigin(0.5)
        this.add.text(centerX + 360, centerY + 300, ' "Jirka Scream" by Kalibrk ', twoLookSmall).setOrigin(0.5)
        this.add.text(centerX + 360, centerY + 350, ' "Underwater Ambience" by Merrick 079 ', twoLookSmall).setOrigin(0.5)
        this.add.text(centerX + 360, centerY + 400, ' "Whoose Medium Short" by moogy73 ', twoLookSmall).setOrigin(0.5)

        // add text for directions
        this.add.text(game.config.width/2 + 350, 350, ' Press [M] for Menu ', oneLook).setOrigin(0.5)
        this.add.text(game.config.width/2 + 350, 450, ' Press [SPACE] to Restart ', oneLook).setOrigin(0.5)
    
        // define M R C keys
         this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
         this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

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
    }
}

// i might not push this and just delete right here because the credits button is not working, 
