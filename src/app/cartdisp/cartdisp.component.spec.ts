import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdispComponent } from './cartdisp.component';

describe('CartdispComponent', () => {
  let component: CartdispComponent;
  let fixture: ComponentFixture<CartdispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartdispComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
