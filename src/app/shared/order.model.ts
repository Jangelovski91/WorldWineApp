export class Order {
    public wineName: string;
    public numberOfBottles: number;

    constructor(name: string, numOfBottles: number){
        this.wineName = name,
        this.numberOfBottles = numOfBottles
    }
}