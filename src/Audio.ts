import { Howl, Howler } from 'howler';

export class Audio {
    private sfx;

    public constructor() {
        //Creates a "Bucket" of sound effects
        this.sfx = {
            music: new Howl({
                src: [
                    "assets/backgroundMusic.mp3"
                ],
                volume: 0.2,
                loop: true
            }),
            winSoundEffect: new Howl({
                src: [
                    "assets/winEffect.wav"
                ],
                loop: true,

            }),
            spinSoundEffect: new Howl({
                src: [
                    "assets/spinEffect.wav"
                ],
                loop: true
            })

        };
    }

    //takes boolean and toggles winSound on/off
    public toggleWinSoundEffect(toggle: boolean) :void {
        if (toggle) {
            this.sfx.winSoundEffect.play();
            this.sfx.winSoundEffect.fade(1, 0, 3000)
        }
        else {
            this.sfx.winSoundEffect.stop();
        }

    }

    //takes boolean and toggles music on/off
    public toggleMusicEffect(toggle: boolean) :void {
        if (toggle) {
            this.sfx.music.play();
        }
        else {
            this.sfx.music.stop();
        }

    }

    //takes boolean and toggles spinSound on/off
    public toggleSpinSoundEffect(toggle: boolean) :void {
        if (toggle) {
            this.sfx.spinSoundEffect.play();
        }
        else {
            this.sfx.spinSoundEffect.stop();
        }
    }
}

