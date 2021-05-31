
export class Wine {
    public name: string;
    public placeFrom: string;
    public description: string;
    public price: number;
    public imagePath: string;

    
    constructor(name: string, placeFrom: string, description: string, price: number, imagePath: string){
        this.name = name;
        this.placeFrom = placeFrom;
        this.description = description;
        this.price = price;
        this.imagePath =imagePath;
    };
    
}