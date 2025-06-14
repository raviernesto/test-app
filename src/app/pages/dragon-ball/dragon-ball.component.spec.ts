import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallComponent } from './dragon-ball.component';

describe('DragonBallComponent', () => {
  let component: DragonBallComponent;
  let fixture: ComponentFixture<DragonBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragonBallComponent]
    });
    fixture = TestBed.createComponent(DragonBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
