import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoDetailComponent } from './so-detail.component';

describe('SoDetailComponent', () => {
  let component: SoDetailComponent;
  let fixture: ComponentFixture<SoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
