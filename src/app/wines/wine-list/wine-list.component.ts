import { Component, OnInit } from '@angular/core';
import {Wine} from '../wine.model'
@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [
    new Wine('Le Pin', 
    'Pomerol, France', 
    'Château Le Pin, or simply Le Pin, is a Bordeaux wine from the appellation Pomerol. The unusually small estate is located on the Right Bank of France’s Gironde estuary in the commune of Pomerol in the hamlet of Catusseau', 
    3000,
    'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/05/Hawksmoor-Le-Pin-920x609.png'  ),
    new Wine('J.S. Terrantez', 
    'Medeira, Portugal', 
    'Terrantez is an off dry wine with an exquisite taste of light and delicate freshness. The wine has light notes, almost a delicate lemon zest and ozone like quality of freshness, but with the delightful depth and elegance of a Madeira made wine.', 
    8500,
    'https://www.wine-searcher.com/images/region/madeira-terrantez-7075-1-1.jpg'  ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
