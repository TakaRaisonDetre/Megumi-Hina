import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoListsComponent } from './so-lists.component';

describe('SoListsComponent', () => {
  let component: SoListsComponent;
  let fixture: ComponentFixture<SoListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
