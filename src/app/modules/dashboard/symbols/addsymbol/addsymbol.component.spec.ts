import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsymbolComponent } from './addsymbol.component';

describe('AddsymbolComponent', () => {
  let component: AddsymbolComponent;
  let fixture: ComponentFixture<AddsymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
