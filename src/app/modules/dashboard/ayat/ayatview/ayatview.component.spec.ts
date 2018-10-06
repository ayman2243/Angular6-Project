import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyatviewComponent } from './ayatview.component';

describe('AyatviewComponent', () => {
  let component: AyatviewComponent;
  let fixture: ComponentFixture<AyatviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyatviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
