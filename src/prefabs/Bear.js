//Fast ship prefab
class Bear extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // Borrowed a lot from CP-Scrolling
        scene.add.existing(this)           // add bear to existing scene
        scene.physics.add.existing(this)   // add physics body to scene

        this.body.setSize(this.width, this.height)
        this.body.setCollideWorldBounds(false)

        // set custom bear properties

    }

    


    update() {
        // Horizontal Wrap around
        // if (this.x > width) {
        //     this.x = 0
        // }
        // if (this.x <0){
        //     this.x = width
        // }

        if(keyJUMP.isDown && collide(this)) {
            this.body.setVelocity(0,-250)
        } 


    }

    reset() {
        
    }
}
