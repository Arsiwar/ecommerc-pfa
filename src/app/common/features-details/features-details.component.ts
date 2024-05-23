import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { CartItem } from '../cart-item';
import { Product } from '../product';

@Component({
  selector: 'app-features-details',
  templateUrl: './features-details.component.html',
  styleUrl: './features-details.component.css'
})
export class FeaturesDetailsComponent implements OnInit {

  product: Product = new Product();
  constructor(private productSev: ProductService,
    private router: ActivatedRoute, private cartServ: CartService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const productIdString = params.get('id');
      if (productIdString) {
        const productId = parseInt(productIdString, 10);
        this.handleProductDetails(productId); // Pass the parsed ID
      } else {
        console.error("Missing 'id' parameter in route");
        // Handle the missing ID scenario (e.g., display error message)
      }
    });
  }

  handleProductDetails(productId: number) {
    this.productSev.getProduct(productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error("Error fetching product details:", error);
        // Handle the error scenario (e.g., display error message)
      }
    );
  }

  addToCart() {
    if (this.product) { // Check if product is available
      console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
      const theCartItem = new CartItem(this.product);
      this.cartServ.addToCart(theCartItem);
    } else {
      console.error("Product details not yet available");
      // Handle the case where product details haven't been fetched yet
    }
  }
}
