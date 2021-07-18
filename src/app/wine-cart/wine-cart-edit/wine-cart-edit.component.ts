import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-wine-cart-edit',
  templateUrl: './wine-cart-edit.component.html',
  styleUrls: ['./wine-cart-edit.component.css']
})
export class WineCartEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('pricePerBottle') pricePerBottleInputRef: ElementRef;
  @Output() newOrderCreated = new EventEmitter<Order>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newOrder = new Order(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value, this.pricePerBottleInputRef.nativeElement.value)
    this.newOrderCreated.emit(newOrder);
  }

}
