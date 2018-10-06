import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesurahComponent } from './deletesurah.component';

describe('DeletesurahComponent', () => {
  let component: DeletesurahComponent;
  let fixture: ComponentFixture<DeletesurahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletesurahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletesurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
