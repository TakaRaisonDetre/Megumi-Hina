import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSalesTableComponent } from './crud-sales-table.component';

describe('CrudSalesTableComponent', () => {
  let component: CrudSalesTableComponent;
  let fixture: ComponentFixture<CrudSalesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSalesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSalesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
