
import * as PIXI from 'pixi.js';
import { GameManager } from './Index';

export class WinMessage {

    private text: PIXI.Text;
    private score: number;

    //creates a basic PIXI.Text that displays the score
    public constructor() {
        this.score = 0;
        let style = new PIXI.TextStyle({
            fontFamily: "Arial Black",
            fontStyle: "italic"
        });
        this.text = new PIXI.Text("SCORE: ", style);
        this.setupWinText();
    }

    //sets and adds WinText to stage
    private setupWinText(): void {
        GameManager.app.stage.addChild(this.text);
        this.text.position.set(100, 100);
    }

    //adds old score to new score creating new new score
    private updateWin(newScore: number) {
        this.score += newScore;
        this.text.text = "SCORE: " + this.score;

    }

    //takes newTicket array from DummyServer and checks if win = true, if true calls updateWin passing number and returns boolean
    public checkWin(newTicket): Boolean {
        if (newTicket["win"]) {
            this.updateWin(newTicket["score"])
            return true;
        }
        else {
            return false;
        }
    }
}


