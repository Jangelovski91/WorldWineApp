import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCartComponent } from './wine-cart.component';

describe('WineCartComponent', () => {
  let component: WineCartComponent;
  let fixture: ComponentFixture<WineCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
