import * as PIXI from 'pixi.js';
import { DummyServer } from './DummyServer';
import { ReelManager } from './ReelManager';
import { Button } from './Button';
import { WinMessage } from './WinMessage';
import { WinAnimation } from "./WinAnimation";
import { DroppedItemManager } from "./DroppedItemManager";
import { Background } from "./BackGround";
import { Audio } from "./Audio";
import { keyDisplay } from './KeyDisplay';
export class GameManager {

    public static app: PIXI.Application;
    private reelManager: ReelManager;
    private droppedItemManager: DroppedItemManager;
    private dummyServer: DummyServer;
    private playButton: Button;
    private musicButton: Button;
    private newTicket: Object;
    private winMessage: WinMessage;
    private winAnimation: WinAnimation;
    private background: Background;
    private keyDisplay: keyDisplay;
    private audio: Audio;
    
    public constructor() {
        GameManager.app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
        document.body.appendChild(GameManager.app.view);

        //preloads all the textures used in the project and assigns names to them
        PIXI.Loader.shared.add('bow', 'assets/bow.png');
        PIXI.Loader.shared.add('armor', 'assets/armor.png');
        PIXI.Loader.shared.add('coin', 'assets/coin.png');
        PIXI.Loader.shared.add('tome', 'assets/tome.png');
        PIXI.Loader.shared.add('tools', 'assets/tools.png');
        PIXI.Loader.shared.add('gemRed', 'assets/gemRed.png');
        PIXI.Loader.shared.add('slotWindow', 'assets/slotWindow.png');
        PIXI.Loader.shared.add('panel', 'assets/panel.png');
        PIXI.Loader.shared.add('spinButton', 'assets/spinButton.png');
        PIXI.Loader.shared.add('stopButton', 'assets/stopButton.png');
        PIXI.Loader.shared.add('musicButton', 'assets/musicButton.png');
        PIXI.Loader.shared.onComplete.add(this.onLoadComplete.bind(this));
        PIXI.Loader.shared.load();
    }
    
    //creates all the main objects for the project and creates play and music button (could be handled by another .ts)
    private onLoadComplete(): void {
        this.audio = new Audio();
        this.background = new Background();
        this.keyDisplay = new keyDisplay();
        this.dummyServer = new DummyServer();
        this.reelManager = new ReelManager();
        this.droppedItemManager = new DroppedItemManager();
        this.playButton = new Button(true, ["spinButton","stopButton"], 650, 510, 1);
        this.musicButton = new Button(true, ["musicButton"], 750, 50, 0.1);
        this.winMessage = new WinMessage();
        this.winAnimation = new WinAnimation(this.reelManager.getReelArray(), this.droppedItemManager.getDroppedItemArray());

        //toggle button that either stops or starts the reels and calls all animations and sounds associated
        this.playButton.button.on('pointertap', () => {
            if (this.playButton.toggleButton()) {
                this.playButton.changeTexture(1);
                this.reelManager.startAll();
                this.winAnimation.resetIconAnimation();
                this.audio.toggleWinSoundEffect(false);
                this.audio.toggleSpinSoundEffect(true);
            }
            else {
                this.playButton.changeTexture(0);
                this.newTicket = this.dummyServer.getTicket();
                this.reelManager.stopAll(this.newTicket);
                this.audio.toggleSpinSoundEffect(false);
                if (this.winMessage.checkWin(this.newTicket)) {
                    this.winAnimation.playWinAnimation();
                    this.audio.toggleWinSoundEffect(true);
                    
                }
            }

        });

        //turns the music on/off
        this.musicButton.button.on('pointertap', () => {
            if (this.musicButton.toggleButton()) {
                this.audio.toggleMusicEffect(true);
            }
            else {
                this.audio.toggleMusicEffect(false);
            }

        });


    }
}

window.onload = function () {
    new GameManager();
}
