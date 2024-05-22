import { Product } from "./product";

export class CartItem {
    
    name:string;
    imageUrl:String;
    unitPrice:number;
    quantity:number;
    id: any;

    constructor(product: Product){
        this.name = product.name;
        this.imageUrl = product.imageUrl;
        this.unitPrice = product.unitPrice
        this.quantity= 1
    }
}
