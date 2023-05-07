class Item {
    id: number;
    name: string;
    place: string;
    price: number;

    constructor(id: number, name: string, place: string, price: number) {
        this.id = id;
        this.name = name;
        this.place = place;
        this.price = price;
    }
}

export default Item;