import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnEventComponent } from './learn-event.component';

describe('LearnEventComponent', () => {
  let component: LearnEventComponent;
  let fixture: ComponentFixture<LearnEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnEventComponent]
    });
    fixture = TestBed.createComponent(LearnEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
