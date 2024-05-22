import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

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
  allProducts() {
    this.router.navigate(['/products']); 
  }
  
  gotoviewdetails() {
    this.router.navigate(['/details']); 
  }

}
