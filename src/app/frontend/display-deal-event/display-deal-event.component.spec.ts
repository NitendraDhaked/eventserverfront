import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDealEventComponent } from './display-deal-event.component';

describe('DisplayDealEventComponent', () => {
  let component: DisplayDealEventComponent;
  let fixture: ComponentFixture<DisplayDealEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDealEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDealEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
