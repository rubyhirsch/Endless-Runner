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
      characterRef.setSize(212, 193)
      //characterRef.setOffset(10, 0)
      characterRef.body.setCollideWorldBounds(true)
      //characterRef.setImmovable()
      characterRef.setMaxVelocity(0, 600)
      characterRef.setDragY(8)
      //characterRef.destroyed = false
      
      
      this.anims.create({
        key: 'look',
        frameRate: 2,
        repeat: -1, 
        frames: this.anims.generateFrameNumbers('characterSprite', {
            start:0,
            end: 2
        })
      })
      this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
      characterRef.play('look')
    }
    

    update() {
        this.blood.tilePositionX -= -4

        if(Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
          characterRef.body.setVelocityY(-230) 
        }
        
    }
}
