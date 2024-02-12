class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainMenuScene')
    }

    preload() {
        
    }

    create() {
        // hero animations (walking)
           this.scene.start('playScene')
    }
}