class Play extends Phaser.Scene {
    constructor() {
      super('playScene')
    }
    
    create() {
      this.physics.world.gravity.y = 300
      // place tile sprite
      this.blood = this.add.tileSprite(0, 0, 1680, 900, 'blood').setOrigin(0, 0)
      this.add.text(20, 20, "Endless Runner Play")

      characterRef = this.physics.add.sprite(0, 0, 'characterSprite').setOrigin(0, 0)
      //characterRef.setOffset(10, 0)
      characterRef.body.setCollideWorldBounds(true)
      characterRef.setImmovable()
      characterRef.setMaxVelocity(0, 600)
      characterRef.setDragY(8)
      //characterRef.destroyed = false
      
      
      this.anims.create({
        key: 'look',
        frameRate: 2,
        repeat: -1, 
        frames: this.anims.generateFrameNumbers('characterSprite', {
            start: 0,
            end: 2
        })
      })

      this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
      characterRef.play('look')


      this.virus = 0
      this.virusSpeed = -450

      this.mask = 0
      this.maskSpeed = -450

      

      // set up mask group 
      this.maskGroup = this.add.group({
        runChildUpdate: true    // make sure update runs on group children
      });

      // wait a few seconds before spawning mask
      this.time.delayedCall(100, () => { 
        console.log("add mask")
        this.addMask(); 
      });

      // set up virus group
      this.virusGroup = this.add.group({
        runChildUpdate: true    // make sure update runs on group children
      });

      // wait a few seconds before spawning virus
      this.time.delayedCall(100, () => { 
        console.log("add virus")
        this.addVirus(); 
      });

      // add score for masks
      this.masksScore = 0

      let oneMenuLook = {
        fontFamily: 'Courier',
        fontSize: '50px',
        backgroundColor: '#162a30',
        color: 'white',
        align: 'center',
    }

      // score board text
      this.score = this.add.text(centerX, 10,`Masks Collected: ${this.masksScore}`, oneMenuLook).setOrigin(0.5, 0)
    }
    
    // create new Virus and add them to existing Virus group
    addVirus() {
      let speedVariance =  Phaser.Math.Between(0, 50);
      this.virus = new Virus (this, this.virusSpeed - speedVariance, 'virus');
      this.virusGroup.add(this.virus);
      console.log("parts 2 of adding v");
    }

    // create new Virus and add them to existing Virus group
    addMask() {
      let speedVariance =  Phaser.Math.Between(0, 50);
      this.mask = new Masks (this, this.maskSpeed - speedVariance, 'mask');
      this.maskGroup.add(this.mask);
      console.log("parts 2 of adding v");
    }


    update() {
        this.blood.tilePositionX -= -4

        if(Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
          characterRef.body.setVelocityY(-230) 
        }

        // check collisions
        this.physics.world.collide(characterRef, this.virusGroup, this.virusCollision, null, this)
        this.physics.world.collide(characterRef, this.maskGroup, this.maskCollision, null, this)
    }

    virusCollision() {
      console.log("hit virus")

      this.time.delayedCall(300, () => {this.scene.start('GameOver')
      })

    }

    maskCollision(characterRef, mask) {
      console.log("hit mask")

      mask.alpha = 0
      mask.destroy()
      this.masksScore ++ 
      this.score.text = `Masks Collected: ${this.masksScore}`

    }
    
}
