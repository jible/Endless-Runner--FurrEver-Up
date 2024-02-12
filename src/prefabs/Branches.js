//Fast ship prefab
class Branch extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
    }

    update() {
        //wrap around
        // if (this.x >= game.config.width - borderUISize) {
        //     this.x = borderUISize + 10
        // }
    }

    reset() {
        
    }
}