import { Component, Input } from '@angular/core';
import { cartInfo } from '../type/cartInfo';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartInfo: cartInfo = {
    cartImg: 'images/illustration-empty-cart.svg'
  }
}
