class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }
 
    preload() {
        this.load.audio('sfx-death', './assets/explosion.wav')
        this.load.audio('sfx-jump', './assets/jump.wav')
        this.load.audio('music', './assets/music.mp3')
    }
    create() {
        // define keys
        
        this.music = this.sound.add('music', {
            loop:true
        
        });
        this.music.play()
        walking = false
        keyJUMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyCREDITS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)

        keyRESET = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
        this.tree = this.add.tileSprite(0, 0, 180 ,960, 'tree').setOrigin(0,0)
        this.tree.setScale(4)

        platforms = this.platforms = this.add.group()

        start = false

        this.gameOver = false

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '23px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'left',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        this.instructions = this.add.text(width/2, height- 30 , 'Use <- -> to move & Space to Jump', menuConfig).setOrigin(0.5)


        // https://github.com/phaserjs/examples/blob/master/public/src/physics/arcade/asteroids%20movement.js

        player = new Bear(this, width/2, height -100 , 'bear', 0 )
        
      
        this.score = 0
        this.DisplayedScore = 0
        
        let first = topPlatform = new Branch ( this, width/2, height - 50, 'branch', 0)
        
        this.platforms.add(first)
        platformCount =1 
        topPlatform = first


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

        let cheatConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            align: 'middle'
        }

        this.score = 0

        this.scoreLeft = this.add.text(0, 10,"Score: " + this.score, scoreConfig)
        this.cheat = this.add.text(0, 50,"Press Space and R to cheat", cheatConfig)
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
        
        this.physics.add.collider(player, this.platforms)

       
        this.GameOverConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            align: 'center'
        }


    }

    
    update(){

        if( ((keyJUMP.isDown && player.body.velocity.y == 0 ) || (keyJUMP.isDown && keyRESET.isDown))  && this.gameOver == false && !keyRESET.isDown) {
            
            this.sound.play('sfx-jump')
        }
        if ( platformCount < 20 && this.gameOver == false) {
            this.generatePlatform()
        }
        
        
        
        if ( player.y < height/3 && this.gameOver == false) {
            this.score+=2
        } else if (start && this.gameOver == false){
            this.score += 1
        }
        if(start && this.gameOver == false){
            this.tree.tilePositionY -= 1
        }
            Phaser.Actions.Call(platforms.getChildren(), function(branch) {
            branch.update(this.start, this.gameOver) 
        }, this)

        if ( this.score > this.DisplayedScore){
            this.DisplayedScore = this.score
            this.scoreLeft.text = "Score: " + this.score
            if (this.score > highScore){
                highScore = this.score
                this.highScore.text = "High Score: " + highScore
            }
        }
        if ( this.score  > 50){
            
            this.instructions.text = "Try to get as High as you can!"
            if ( this.score > 250){
                
                this.instructions.text = "Try going around if you can't make a jump"
            }
            if ( this.score > 500){
                this.instructions.x = height + 200
            }
            
        }

        player.update(this.score, this.gameOver)
        if ( player.y >height + 100){
            
        }
        if (player.y > height + 50 && !this.gameOver){

            this.sound.play('sfx-death')
            this.gameOver = true
            
            this.add.text(width/2, height/2,"GAME OVER", this.GameOverConfig).setOrigin(.5)
            this.add.text(width/2, height/2 + 50,"Press R to play again", this.GameOverConfig).setOrigin(.5)
            this.add.text(width/2, height/2 + 100,"Press M to return to Main Menu", this.GameOverConfig).setOrigin(.5)
            
        }
        if (this.gameOver){
            if(keyCREDITS.isDown){
                
                this.scene.start('menuScene')
            }
            if(keyRESET.isDown){
                this.music.pause()
                this.scene.start('playScene')
            }
        }
    }

    
    generatePlatform(){

        let minDistance = 20 +this.score/50
        if (minDistance > 100){
            minDistance = 99
        }
        //score( height) should determine minimum distance between plaforms far apart platforms are 
        let newPlat = new Branch ( this,  Phaser.Math.FloatBetween(30, width-30), topPlatform.y - (Phaser.Math.FloatBetween(minDistance, 100)),'branch', 0)
        this.platforms.add(newPlat)
        topPlatform = newPlat
        platformCount ++

    }

}
