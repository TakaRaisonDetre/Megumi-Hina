import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProductInfoComponent } from './crud-product-info.component';

describe('CrudProductInfoComponent', () => {
  let component: CrudProductInfoComponent;
  let fixture: ComponentFixture<CrudProductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudProductInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
