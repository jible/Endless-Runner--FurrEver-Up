//Fast ship prefab
class Bear extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // Borrowed a lot from CP-Scrolling
        scene.add.existing(this)           // add bear to existing scene
        scene.physics.add.existing(this)   // add physics body to scene

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setCollideWorldBounds(false)

        // set custom bear properties
        this.bearVelocity = 100    // in pixels
        this.hurtTimer = 250       // in ms


    }

    


    update() {
        
    }

    reset() {
        
    }
}
