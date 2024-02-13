class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {
        
    }

    create() {
        // define keys
        keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)


        
        this.tree = this.add.tileSprite(0, 0, 180 ,960, 'tree').setOrigin(0,0)
        this.tree.setScale(4)

        platforms = this.platforms = this.add.group()
        this.speedX = 0
        this.speedY = 0


        // https://github.com/phaserjs/examples/blob/master/public/src/physics/arcade/asteroids%20movement.js

        player = this.bear = new Bear(this, width/2, height -100 , 'bear', 0 )
        this.bear.body.setDamping(true)
        this.bear.body.setDrag(.05, 0) 
        this.bear.setScale(3)
        
        

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            align: 'left',
            fixedWidth: 200
        }
        this.score = 0

        this.scoreLeft = this.add.text(0, 10,"Score: " + this.score, scoreConfig)

        let highScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            align: 'left',
            fixedWidth: 300
        }

        this.highScore = this.add.text(game.config.width - 200, 10,"High Score: " + highScore, highScoreConfig)
        

    }

    
    update(){
        if(keyLEFT.isDown) {

            this.bear.setFlip(false, false)
        } 
        if(keyRIGHT.isDown) {
            this.bear.setFlip(true, false)
        } 
        
        if(keyJUMP.isDown && this.bear.checkCollision) {
            verticalMovement =2
        }  else if (this.bear.checkCollision){
            verticalMovement = 0
        }
        if ( this.bear.y < height/3) {
            this.tree.tilePositionY -= .5
            this.platforms.x += 3
        }
        
        this.bear.update()
    }

    generatePlatform(){
        let newPlat = 
    }


}