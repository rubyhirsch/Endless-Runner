class Tut extends Phaser.Scene {
    constructor() {
        super('tutScreen')
    }

    preload() {
        this.load.image("tutBackground", "assets/tut_background.png");
    }

    create() {

        // add tutorial 
        let tutorialScreen = this.add.sprite(0, 0, 'tutBackground').setOrigin(0, 0)


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
            fontSize: '30px',
            backgroundColor: '#bec6c0',
            color: 'black',
            align: 'center',
        }
        
        // add title text
        this.add.text(centerX + 350, centerY - 300, ' Tutorial ', oneMenuLook).setOrigin(0.5)

        // add descriptor\
        this.add.text(centerX - 360, centerY - 200, ' Press [SPACE] to jump up and down! ', twoLookSmall).setOrigin(0.5)
        this.add.text(centerX - 460, centerY + 400, ' Avoid all the viruses! ', twoLookSmall).setOrigin(0.5)
        this.add.text(centerX - 360, centerY + 0, ' Collect masks to protect you! ', twoLookSmall).setOrigin(0.5)

        // add text for directions
        this.add.text(game.config.width/2 + 350, 350, ' Press [M] for Menu ', oneLook).setOrigin(0.5)
        this.add.text(game.config.width/2 + 350, 250, ' Press [S] to Start ', oneLook).setOrigin(0.5)
        //this.add.text(game.config.width/2 + 350, 450, ' Press [R] to Restart ', oneLook).setOrigin(0.5)
    
        // define M R C keys
         this.keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
         this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

    }

    update() {
        // check for M input for menu
        if (Phaser.Input.Keyboard.JustDown(this.keyM)) {
            this.scene.start('menuScene')
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyS)) {
            this.scene.start('playScene')
        }
    }
}

