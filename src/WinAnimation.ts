
import { gsap } from "gsap";
import { GlowFilter } from 'pixi-filters';
import { DroppedItem } from "./DroppedItem";
import { Reel } from "./Reel";
import { GameManager } from "./Index";

export class WinAnimation {
    private reelArray: Array<Reel>;
    private droppedItemArray: Array<DroppedItem>
    private iconTl: gsap.core.Timeline;
    private droppedItemTl: gsap.core.Timeline;

    public constructor(reelArray, droppedItemArray) {
        this.reelArray = reelArray;
        this.droppedItemArray = droppedItemArray;

        this.main();
    }
    private main() {
        this.iconTl = gsap.timeline({});
        this.droppedItemTl = gsap.timeline({});
        this.setupIconAnimation();
        this.setupDroppedItemAnimation();
    }

    //public method to play both DroppdItem animation and Icon animation
    public playWinAnimation() {
        console.log("hello");
        this.iconTl.play(3);
        this.droppedItemTl.play(0);

    }
    //resets the Icon animation back to 0 ready to be played again
    public resetIconAnimation() {
        this.iconTl.pause(0);
    }

    //creates and pauses icon animation
    private setupIconAnimation() {
        this.reelArray.map((reel, i) => {
            reel.reel.filters = [new GlowFilter({ distance: 15, outerStrength: 2 })];
            this.iconTl.to(reel.reel.scale, { x: 1.5, y: 1.5, duration: 1, repeat: -1, yoyo: true, });
            this.iconTl.to(reel.reel, { rotation: -0.25 * Math.PI, duration: 1, repeat: -1, yoyo: true, ease: "elastic.out(1, 0.3)", }, "start");
            this.iconTl.to(reel.reel, { rotation: 0.25 * Math.PI, duration: 1, repeat: -1, yoyo: true, ease: "elastic.out(1, 0.3)", }, "start");
            this.iconTl.pause();
        })

    }

    //creates and pauses droppedItem animation
    private setupDroppedItemAnimation() {
        let bOS = (GameManager.app.stage.height + 100);
        this.droppedItemArray.map((droppedItem, i) => {
            this.droppedItemTl.to(droppedItem.droppedItem, { y: bOS, duration: (Math.random() * 2) + 1, delay: Math.random() * 1 }, "start",)
            this.droppedItemTl.set(droppedItem.droppedItem, { onComplete: function () { this.pause(); } });
            this.droppedItemTl.pause();
        })

    }


}


