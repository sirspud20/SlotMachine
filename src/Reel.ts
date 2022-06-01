import * as PIXI from 'pixi.js';

import { GameManager } from './Index';

export class Reel {

    public reel: PIXI.Container;

    private newIcon: PIXI.AnimatedSprite;
    private glow: PIXI.Sprite;
    private textureArray: Array<string>;

    public constructor(textureArray: Array<string>) {
        this.textureArray = textureArray;
        this.main();
    }


    private main(): void {
        this.reel = new PIXI.Container();
        this.reel.name = "reel";
        GameManager.app.stage.addChild(this.reel);
        this.reel.x = GameManager.app.view.width / 2;
        this.reel.y = 0;
        this.populateReel(this.textureArray);

    }

    //takes textureArray and creates Icon Sprite
    private populateReel(textureArray: Array<string>): void {
        this.newIcon = PIXI.AnimatedSprite.fromImages(textureArray);
        this.newIcon.animationSpeed = Math.random();
        this.newIcon.height = 150;
        this.newIcon.width = 150;
        this.newIcon.anchor.set(0.5);
        this.reel.addChild(this.newIcon);
    }

    //loops through texturearray on Icon
    private startSpin(): void {
        this.newIcon.play();
    }

    //takes number and changes texture of Icon
    private stopSpin(stopIcon: number): void {
        this.newIcon.gotoAndStop(stopIcon);
    }

    //takes number and calls private method
    public stopReel(stopIcon: number): void {
        this.stopSpin(stopIcon);


    }
    //public method to call private startspin
    public startReel(): void {
        this.startSpin();
    }

    //public method to set Position of reel
    public setReelPos(xPos, yPos): void {
        this.reel.position.set(xPos, yPos);
    }
}