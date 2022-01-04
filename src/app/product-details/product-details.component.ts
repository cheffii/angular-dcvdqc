import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products = products;

  constructor(   private route: ActivatedRoute, private cartService: CartService) {
    
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {}
}
