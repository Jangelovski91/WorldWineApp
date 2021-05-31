import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
@Component({
  selector: 'app-wine-cart',
  templateUrl: './wine-cart.component.html',
  styleUrls: ['./wine-cart.component.css']
})
export class WineCartComponent implements OnInit {
  orders: Order[] = [
    new Order('Le Pin', 2),
    new Order('J.S.Terrantez', 4),
  ]
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
