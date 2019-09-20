import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPopupComponent } from './detail-popup.component';

describe('DetailPopupComponent', () => {
  let component: DetailPopupComponent;
  let fixture: ComponentFixture<DetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
