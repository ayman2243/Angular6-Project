import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyatAddComponent } from './ayat-add.component';

describe('AyatAddComponent', () => {
  let component: AyatAddComponent;
  let fixture: ComponentFixture<AyatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyatAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
