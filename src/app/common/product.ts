export class Product {
    id: number = 0
    sku: string ="";
    name: string ="";
    description: string ="";
    unitPrice: number =0;
    imageUrl: string ="";
    active: boolean =true;
    unitsInStock: number =0;
    dateCreated: Date = new Date();
    lastUpdate: Date = new Date();
    }