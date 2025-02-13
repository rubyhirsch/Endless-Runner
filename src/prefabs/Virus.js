class Virus extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity, sprite) {
        // call Phaser Physics Sprite constructor
        super(scene, w + 100, Phaser.Math.Between(100, 600), 'virus'); 
        
        this.parentScene = scene;               

        // set up physics sprite
        this.parentScene.add.existing(this);    
        this.parentScene.physics.add.existing(this);    
        this.setVelocityX(velocity);            
        this.setImmovable();                    
        this.newVirus = true;                 
        this.body.setAllowGravity(false);
    }

    update() {
        // add new Virus when existing Virus hits center X
        if(this.newVirus && this.x < centerX) {
            this.parentScene.addVirus(this.parent, this.velocity);
            this.newVirus = false;
        }

        if(this.x < -this.width) {
            this.destroy();
        }
    }
}