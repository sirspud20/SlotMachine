import * as PIXI from 'pixi.js';
import { GameManager } from './Index';


export class DroppedItem {

    public droppedItem: PIXI.AnimatedSprite;
    
    private textureArray: Array<string>;

    public constructor(textureArray: Array<string>) {
        this.textureArray = textureArray;
        this.droppedItem = PIXI.AnimatedSprite.fromImages(this.textureArray);
        this.setupDroppedItem();
        this.setRandomTexture();
    }

    //sets and adds droppedItems to the stage above the view randomly is an area
    private setupDroppedItem(): void {
        this.droppedItem.position.set(Math.random() * 800, (Math.random() * -200) - 100);
        this.droppedItem.anchor.set(0.5);
        this.droppedItem.scale.set(0.2);
        this.droppedItem.rotation = Math.random() * 360;
        GameManager.app.stage.addChild(this.droppedItem);
    }

    //sets random texture from texture array on dropped item
    public setRandomTexture(): void {
        this.droppedItem.gotoAndStop(Math.random() * this.textureArray.length);
    }
}