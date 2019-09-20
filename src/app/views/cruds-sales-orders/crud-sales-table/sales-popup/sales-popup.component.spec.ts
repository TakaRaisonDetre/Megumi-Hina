import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPopupComponent } from './sales-popup.component';

describe('SalesPopupComponent', () => {
  let component: SalesPopupComponent;
  let fixture: ComponentFixture<SalesPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
