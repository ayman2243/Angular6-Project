import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsymbolComponent } from './listsymbol.component';

describe('ListsymbolComponent', () => {
  let component: ListsymbolComponent;
  let fixture: ComponentFixture<ListsymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsymbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
