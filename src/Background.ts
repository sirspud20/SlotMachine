
import * as PIXI from 'pixi.js';
import { GameManager } from './Index';

export class Background {
    private slotWindow: PIXI.Sprite;
    private panel: PIXI.Sprite;

    public constructor() {
        this.slotWindow = PIXI.Sprite.from("slotWindow");
        this.panel = PIXI.Sprite.from("panel");
        this.setupSlotWindow();
        this.setupPanel();
    }

    //sets and adds slotWindow to stage
    private setupSlotWindow(): void {
        this.slotWindow.position.set(GameManager.app.view.width / 2, 200);
        this.slotWindow.anchor.set(0.5);
        this.slotWindow.scale.set(1.8, 1.5);
        GameManager.app.stage.addChild(this.slotWindow);
    }

    //sets and adds panel to stage
    private setupPanel(): void {
        this.panel.position.set(GameManager.app.view.width / 2, 450);
        this.panel.anchor.set(0.5);
        this.panel.scale.set(0.9, 1);
        GameManager.app.stage.addChild(this.panel);
    }
}


