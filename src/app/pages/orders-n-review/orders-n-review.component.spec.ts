import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersNReviewComponent } from './orders-n-review.component';

describe('OrdersNReviewComponent', () => {
  let component: OrdersNReviewComponent;
  let fixture: ComponentFixture<OrdersNReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersNReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersNReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
