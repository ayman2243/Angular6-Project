import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyateditComponent } from './ayatedit.component';

describe('AyateditComponent', () => {
  let component: AyateditComponent;
  let fixture: ComponentFixture<AyateditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyateditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
