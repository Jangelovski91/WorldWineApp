import { Component, OnInit } from '@angular/core';
import { Wine } from './wine.model';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent implements OnInit {

  selectedWine: Wine;
  constructor() { }

  ngOnInit(): void {
  }

}
