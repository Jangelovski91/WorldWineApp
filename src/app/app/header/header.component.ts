import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureTabSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(featureTab: string) {
    this.featureTabSelected.emit(featureTab);
  }

}
