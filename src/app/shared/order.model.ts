export class Order {
    public name: string;
    public numOfBottles: number
    public pricePerBottle: number

    constructor(name: string, numOfBottles: number, pricePerBottle: number) {
        this.name = name;
        this.numOfBottles = numOfBottles;
        this.pricePerBottle = pricePerBottle;
    }
}