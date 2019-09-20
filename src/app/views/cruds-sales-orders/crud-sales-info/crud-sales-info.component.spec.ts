import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSalesInfoComponent } from './crud-sales-info.component';

describe('CrudSalesInfoComponent', () => {
  let component: CrudSalesInfoComponent;
  let fixture: ComponentFixture<CrudSalesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSalesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSalesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
