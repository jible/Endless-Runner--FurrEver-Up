class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        
        this.load.image('tree', './assets/TreeBackgroundSprite.png')
        this.load.image('bear', './assets/PlaceHolderBear.png')
    }

    create() {
        // hero animations (walking)
           this.scene.start('playScene')
    }
}