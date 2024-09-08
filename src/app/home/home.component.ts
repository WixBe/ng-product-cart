import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { Details } from '../shared/type/details';
import { data } from '../shared/type/data';
import { CartComponent } from '../shared/cart/cart.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CardComponent, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  home_info: Details[] = [];
  constructor() {
      data.forEach(inst => {
        this.home_info.push({
          itemImg: inst.image,
          action: 'images/icon-add-to-cart.svg',
          actionDesc: 'Add to Cart',
          type: inst.category,
          name: inst.name,
          price: `₹ ${inst.price * 83}`
      })
    })
  }
}