class Masks extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity, sprite) {
        // call Phaser Physics Sprite constructor
        super(scene, w + 200, Phaser.Math.Between(100, 600), 'mask'); 
        
        this.parentScene = scene;               

        // set up physics sprite
        this.parentScene.add.existing(this);    
        this.parentScene.physics.add.existing(this);    
        this.setVelocityX(velocity);            
        this.setImmovable();                    
        this.newMask = true;                 
        this.body.setAllowGravity(false);
    }

    update() {
        // add new Virus when existing Virus hits center X
        if(this.newMask && this.x < centerX) {
            this.parentScene.addMask(this.parent, this.velocity);
            this.newMask = false;
        }

        if(this.x < -this.width) {
            this.destroy();
        }
    }
}