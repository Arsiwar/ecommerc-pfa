import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit {
  products: Product[]=[];
  slicedItems:Product[]=[];
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit() {
  this.productitems()
   console.log(this.products);
   console.log(this.slicedItems);
  }

  productitems(){
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(data);
        console.log(this.products);
        this.slicedItems = this.products.slice(0,3)
        console.log(this.slicedItems);
      }
    )
  }
  addToCart(item: Product) {
    // Add the product to cart logic here
    console.log('Adding product to cart:', item);
  }

}
