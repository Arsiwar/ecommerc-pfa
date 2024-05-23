import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItemCount = 0;

  constructor(private cartService: CartService) { } // Inject service

  ngOnInit(): void {
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartService.cartUpdated.subscribe(itemCount => {
      this.cartItemCount = itemCount;
    });
  }
}
