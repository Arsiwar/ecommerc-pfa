import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem: CartItem[]=[];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(theCartItem: CartItem){
    let alreadyExistsInCart:boolean=false;
    let existingCartItem:CartItem | undefined =undefined;
    if(this.cartItem.length>0){
      //find the item based in the cart based on item id
      existingCartItem=this.cartItem.find(tempCartItem=>tempCartItem.id===theCartItem.id);
      //check if we found it 
      alreadyExistsInCart=(existingCartItem !==undefined);
    }
    if(alreadyExistsInCart){
      if (existingCartItem!.quantity !== undefined) {
        existingCartItem!.quantity++;
    }else{
      this.cartItem.push(theCartItem);
    }
    //compute cart total price and total quantity
    this.computeCartTotals();
  }

}

computeCartTotals(){
  let totalPriceValue:number=0;
  let totalQuantityValue:number=0;
  for(let currentCartItem of this.cartItem){
    totalPriceValue+=currentCartItem.quantity*currentCartItem.unitPrice;
    totalQuantityValue+=currentCartItem.quantity;
  }
  //publish the new values 
  this.totalPrice.next(totalPriceValue);
  this.totalQuantity.next(totalQuantityValue);
  //log cart data for debugging purposes
  this.logCartData(totalPriceValue,totalQuantityValue);
}

logCartData(totalPriceValue:number, totalQuantity: number){
  console.log('content of the cart');
  for(let tempCartItem of this.cartItem){
    const subPrice = tempCartItem.quantity * tempCartItem.unitPrice;

    console.log(`name: ${tempCartItem.name}, quantity: ${tempCartItem.quantity},
    unitPrice: ${tempCartItem.unitPrice}, subTotal: ${subPrice}`);
  }
}

decrementQuantity(theCartItem:CartItem){
  theCartItem.quantity--;
  if(theCartItem.quantity === 0){
    this.remove(theCartItem);
  } else {
    this.computeCartTotals();
  }
}

remove(theCartItem: CartItem){
  const itemIndex = this.cartItem.findIndex(tempCartItem => tempCartItem.id === theCartItem.id)
  if(itemIndex > -1){
    this.cartItem.splice(itemIndex, 1);
    this.computeCartTotals();
  }
}

}