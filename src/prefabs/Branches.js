//Fast ship prefab
class Branch extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this) 




        this.body.setDamping(true)
        this.body.setDrag(.0, 0) 

        this.body.setSize(this.width, this.height/2)
        this.setScale(3)
        this.body.setImmovable(true)
        // https://phaser.discourse.group/t/one-way-and-pass-thru-platforms-in-phaser-3/11641/3
        this.body.checkCollision.down = false;
        this.body.checkCollision.up = true;
        this.body.checkCollision.left = false
        this.body.checkCollision.right = false
        // this.physics.add.collider(player, this, (player,plat)=>{
            
        // })
    }

    update(here, gameOver) {
        // movement
        
        
        
        // https://newdocs.phaser.io/docs/3.54.0/focus/Phaser.Physics.Arcade.ArcadePhysics-moveTo
        


        // Sets Sprite to face direction based on where it is on the screen
        

        // If it is off screen, destroy it
        if (this.y > height + 5){
            this.destroy()
            platformCount--
        }
        // if ( player.y < height/3) {
            
        // }
        if (start && !gameOver){
            if ( player.y < height/3){
                this.y+= 5
            } else {
                this.y += 2
            }
        }

    }

    reset() {
        
    }
}