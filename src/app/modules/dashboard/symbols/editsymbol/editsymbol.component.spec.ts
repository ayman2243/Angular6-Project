import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsymbolComponent } from './editsymbol.component';

describe('EditsymbolComponent', () => {
  let component: EditsymbolComponent;
  let fixture: ComponentFixture<EditsymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
