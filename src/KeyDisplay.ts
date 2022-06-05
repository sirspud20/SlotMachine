
import * as PIXI from 'pixi.js';
import { GameManager } from './Index';

export class keyDisplay {
    private keySpriteArray: Array<PIXI.Sprite>;
    private keyTextArray: Array<PIXI.Text>;
    private textureArray: Array<string> = ["tools", "tome", "coin", "armor"];


    public constructor() {
        this.keySpriteArray = [];
        this.keyTextArray = [];
        this.createKeySpriteArray();
        this.setupKeySprites();
        this.createKeyTextArray()
        this.setupKeyText();
    }

    //creates all the Sprites for the Key
    private createKeySpriteArray(): void {
        this.textureArray.map((texture, i) => {
            this.keySpriteArray.push(PIXI.Sprite.from(texture));
        })
    }

    //creates all the text for the Key
    private createKeyTextArray(): void {
        let style = new PIXI.TextStyle({
            fontFamily: "Arial Black",
            fontStyle: "bold"
        });
        this.textureArray.map((texture, i) => {
            this.keyTextArray.push(new PIXI.Text("X5 " + texture + ": " + ((i + 1) * 50), style));
        })
    }

    //sets and adds all created Sprites
    private setupKeySprites(): void {
        this.keySpriteArray.map((icon, i) => {
            GameManager.app.stage.addChild(icon);
            icon.position.set(100, 375 + (i * 50));
            icon.anchor.set(0.5);
            icon.scale.set(0.15);
        })
    }
    //sets and adds all created Text
    private setupKeyText(): void {
        this.keyTextArray.map((text, i) => {
            GameManager.app.stage.addChild(text);
            text.position.set(125, 375 + (i * 50));
            text.anchor.set(0, 0.5);
        })
    }
}


