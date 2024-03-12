import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxValueComponent } from './box-value.component';

describe('BoxValueComponent', () => {
  let component: BoxValueComponent;
  let fixture: ComponentFixture<BoxValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxValueComponent]
    });
    fixture = TestBed.createComponent(BoxValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
