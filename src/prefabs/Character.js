class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sprite, frame) {
        super(scene, x, y, sprite, frame)

        scene.add.existing(this) //add object to existing scene
    }
}
