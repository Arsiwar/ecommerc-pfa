import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { CartItem } from '../cart-item';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[]=[];

  constructor(private productService: ProductService, private cartServ: CartService) { }
  
  ngOnInit() {
  this.listProducts();
  }
  
  listProducts() {
  this.productService.getProductList().subscribe(
    data => {
  this.products = data;
      console.log(this.products);

  }
  )
  }
  addToCart(productId: number): void {
    // 1. Check if product ID is available
    if (!productId) {
      console.error("Missing product ID for adding to cart");
      return; // Exit function if no ID provided
    }

    // 2. Find product details in the component's product list (if available)
    const product = this.products.find(item => item.id === productId);
    if (product) {
      this.addToCartWithProduct(product); // Use product details if available
    } else {
      // 3. If product details not in component state (optional):
      //    - Fetch product details from product service
      this.productService.getProduct(productId).subscribe(
        fetchedProduct => {
          this.addToCartWithProduct(fetchedProduct);
        },
        error => {
          console.error("Error fetching product details:", error);
          // Handle error (e.g., display error message)
        }
      );
    }
  }

  private addToCartWithProduct(product: Product): void {
    // 4. Create a CartItem object
    const cartItem = new CartItem(product);

    // 5. Add the CartItem to the cart service
    this.cartServ.addToCart(cartItem);

    // 6. (Optional) Display success message or update UI
    console.log(`Product "${product.name}" added to cart.`);
  // You can optionally display a notification or update cart count
  }

}
