import { DroppedItem } from './DroppedItem';

export class DroppedItemManager {

    private textureArray: Array<string> = ["coin", "gemRed"];
    private droppedItemArray: Array<DroppedItem>;
    private droppedItemCount: number;

    public constructor() {
        this.droppedItemCount = 100;
        this.droppedItemArray = [];
        this.createXDroppedItems(this.droppedItemCount);
    }

    //takes number to create that many droppedItems
    private createXDroppedItems(count: number): void {
        for (let i = 0; i < count; i++) {
            let droppedItem = new DroppedItem(this.textureArray);
        this.droppedItemArray.push(droppedItem);
        }
    }

    //returns an array of all create droppedItems
    public getDroppedItemArray(): Array<DroppedItem> {
        return this.droppedItemArray;
    }

}