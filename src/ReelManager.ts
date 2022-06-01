import { Reel } from './Reel';
import { GameManager } from './Index';

export class ReelManager {

    private reelArray: Array<Reel>;
    private textureArray: Array<string> = ["tools", "tome", "coin", "armor", "bow"];

    public constructor() {
        this.reelArray = [
            new Reel(this.textureArray),
            new Reel(this.textureArray),
            new Reel(this.textureArray),
            new Reel(this.textureArray),
            new Reel(this.textureArray)
        ];
        this.setupReel(this.reelArray);
    }

    //takes texture, loops through reelarray and stops all reels on texture
    public stopAll(newTicket): void {
        this.reelArray.map((reel, i) => {
            reel.stopReel(newTicket["reel" + i])
        })
    }

    //loops through reelArray and starts all Animations
    public startAll(): void {
        for (let i = 0; i < this.reelArray.length; i++) {
            let currentReel = this.reelArray[i];
            currentReel.startReel();
        }
    }

    //public method that returns the reelArray
    public getReelArray(): Array<Reel> {
        return this.reelArray;
    }

    //loops through reelArray and sets of Positions
    private setupReel(reelArray: Array<Reel>) {
        this.reelArray.map((reel, i) => {
            let yPos = 200;
            let xPos = (GameManager.app.view.width / (reelArray.length + 1)) * (i + 1);
            reel.setReelPos(xPos, yPos)
        })
    }
}