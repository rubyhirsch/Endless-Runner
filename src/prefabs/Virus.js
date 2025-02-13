// Virus prefab
class Virus extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame)
      scene.add.existing(this) // add to existing scene 
      this.moveSpeed = 3 // spaceship speed in pixels/frame
  
      // add object to existing scene
      scene.add.existing(this)
    }

    update() {
        // move spaceship left 
        this.x -= this.moveSpeed

        // wrap from left to right edge 
        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }
  }