//Fast ship prefab
class Bear extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // Borrowed a lot from CP-Scrolling
        scene.add.existing(this)           // add bear to existing scene
        scene.physics.add.existing(this)   // add physics body to scene
        this.body.setVelocityX(0)
        this.body.setDamping(true)
        this.body.setDrag(.01, 0 ) 
        this.body.setSize(this.width, this.height)
        this.body.setCollideWorldBounds(false)
        this.body.setGravity(0,1500)




        
        // set custom bear properties
    }

    preload(){

        this.load.audio('sfx-jump', './assets/jump.wav')
    }


    update(score, gameOver, ) {
        //Horizontal Wrap around

        if (this.x > width) {
            this.x = 0
        }
        if (this.x <0){
            this.x = width
        }
        
        if( ((keyJUMP.isDown && this.body.velocity.y == 0 ) || (keyJUMP.isDown && keyRESET.isDown))  && gameOver == false) {
            
            //this.sound.play('sfx-jump')
            this.body.setVelocityY(-680 - (score/100))
            start = true
        } 

        

        if(keyLEFT.isDown) {
            this.body.setVelocityX(-250)
            this.setFlip(true, false)
        } 
        if(keyRIGHT.isDown) {
            this.body.setVelocityX(250,)
            this.setFlip(false, false)
        } 

        if ( this.body.velocity.x != 0  && !walking){
            this.anims.play(`walk`)
            walking = true
        } else if (this.body.velocity.x == 0  && walking){
            this.anims.play('chill')
            walking = false
        }
    }

}
