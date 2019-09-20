import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsProductComponent } from './cruds-product.component';

describe('CrudsProductComponent', () => {
  let component: CrudsProductComponent;
  let fixture: ComponentFixture<CrudsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
