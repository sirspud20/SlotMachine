export class DummyServer {

    private ticketArray: Array<any>;

    public constructor() {

        this.onLoadComplete();
    }

    //array of premade tickets for possible outcomes
    private onLoadComplete(): void {
        this.ticketArray = [
            { reel0: 1, reel1: 1, reel2: 1, reel3: 1, reel4: 1, win: true, score: 100 },
            { reel0: 2, reel1: 2, reel2: 2, reel3: 2, reel4: 2, win: true, score: 150 },
            { reel0: 3, reel1: 3, reel2: 3, reel3: 3, reel4: 3, win: true, score: 200 },
            { reel0: 0, reel1: 0, reel2: 0, reel3: 0, reel4: 0, win: true, score: 50 },
            { reel0: 3, reel1: 4, reel2: 2, reel3: 3, reel4: 0, win: false, score: 0 },
            { reel0: 1, reel1: 2, reel2: 2, reel3: 3, reel4: 4, win: false, score: 0 },
            { reel0: 0, reel1: 2, reel2: 2, reel3: 3, reel4: 4, win: false, score: 0 },
            { reel0: 1, reel1: 2, reel2: 0, reel3: 3, reel4: 0, win: false, score: 0 },
        ];

    }

    //returns a random newTicket from server
    public getTicket(): Array<any> {
        let newTicket = this.ticketArray[Math.floor(Math.random() * this.ticketArray.length)];
        return newTicket;
    }

}