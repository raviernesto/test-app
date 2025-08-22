import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickyQuestionsComponent } from './tricky-questions.component';

describe('TrickyQuestionsComponent', () => {
  let component: TrickyQuestionsComponent;
  let fixture: ComponentFixture<TrickyQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrickyQuestionsComponent]
    });
    fixture = TestBed.createComponent(TrickyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
