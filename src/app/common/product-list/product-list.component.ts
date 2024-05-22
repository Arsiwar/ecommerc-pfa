import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];

  constructor(private productService: ProductService, private route:Router) { }
  
  ngOnInit() {
  this.listProducts();
  }
  
  listProducts() {
  this.productService.getProductList().subscribe(
  data => {
  
  this.products = data;
  }
  )
  }
  gotoviewdetails() {
    this.route.navigate(['/details']); 
  }
}
