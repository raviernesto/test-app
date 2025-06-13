import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaNeoComponent } from './nasa-neo.component';

describe('NasaNeoComponent', () => {
  let component: NasaNeoComponent;
  let fixture: ComponentFixture<NasaNeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NasaNeoComponent]
    });
    fixture = TestBed.createComponent(NasaNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
