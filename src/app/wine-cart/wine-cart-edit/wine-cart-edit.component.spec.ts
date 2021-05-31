import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCartEditComponent } from './wine-cart-edit.component';

describe('WineCartEditComponent', () => {
  let component: WineCartEditComponent;
  let fixture: ComponentFixture<WineCartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineCartEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineCartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
