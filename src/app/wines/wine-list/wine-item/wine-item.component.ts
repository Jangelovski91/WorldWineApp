import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wine } from '../../wine.model';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})
export class WineItemComponent implements OnInit {

  @Input() wine: Wine;
  @Output() wineSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.wineSelected.emit();
  }

}
