//Fast ship prefab
class Branch extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        this.body.setSize(this.width, this.height)
        this.body.setImmovable(true)
        // https://phaser.discourse.group/t/one-way-and-pass-thru-platforms-in-phaser-3/11641/3
        this.body.checkCollision.down = false;
        this.body.checkCollision.up = true;

        this.setDamping(true)
        this.setDisplayOrigin(.05)
        this.body.checkCollision.left = false
        this.body.checkCollision.right = false
    }

    update() {
        // movement
        if(keyLEFT.isDown && this.velocity > -250) {
            this.velocity -= 20
            
        } 
        if(keyRIGHT.isDown && this.velocity < 250) {
            this.velocity += 20
        } 
        
        
        // https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Physics.Arcade.ArcadePhysics-moveTo
        


        // Sets Sprite to face direction based on where it is on the screen
        if (this.x < width /3){
            // sprite faces left
        } else if (this.x < width /2 ){
            // sprite is facing straight forward
        } else if (this.x < width){

        }

        // If it is off screen, destroy it
        if (this.y > height + 30){
            this.destroy()
        }

        // Wrap screen
        if (this.x > width) {
            this.x = 0
        }
        if (this.x <0){
            this.x = width
        }
    }

    reset() {
        
    }
}