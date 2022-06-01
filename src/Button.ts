
import * as PIXI from 'pixi.js';
import { GameManager } from './Index';

export class Button {
    public button: PIXI.AnimatedSprite;

    private toggle: boolean;


    public constructor(isVisible: boolean, textureArray: Array<string>, xPos: number, yPos: number, scale: number) {
        this.toggle = false;
        this.button = PIXI.AnimatedSprite.fromImages(textureArray);
        this.button.scale.set(scale);
        GameManager.app.stage.addChild(this.button);
        this.button.anchor.set(0.5);
        this.button.position.set(xPos, yPos);
        this.button.visible = isVisible;
        this.button.interactive = true;
        this.button.buttonMode = true;
    }

    //returns true/false alternately to simulate a toggle switch
    public toggleButton(): boolean {
        if (this.toggle) {
            this.toggle = false;
        }
        else {
            this.toggle = true;
        }
        return this.toggle;
    }
    
    //takes number and changes texture to texture @ number
    public changeTexture(texture: number): void {
        this.button.gotoAndStop(texture);
    }
}


