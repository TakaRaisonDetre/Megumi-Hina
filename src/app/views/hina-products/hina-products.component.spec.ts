import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinaProductsComponent } from './hina-products.component';

describe('HinaProductsComponent', () => {
  let component: HinaProductsComponent;
  let fixture: ComponentFixture<HinaProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinaProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
