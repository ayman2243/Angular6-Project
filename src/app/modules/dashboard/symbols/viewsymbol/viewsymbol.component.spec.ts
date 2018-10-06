import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsymbolComponent } from './viewsymbol.component';

describe('ViewsymbolComponent', () => {
  let component: ViewsymbolComponent;
  let fixture: ComponentFixture<ViewsymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
