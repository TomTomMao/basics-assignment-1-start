import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulTextInputComponent } from './beautiful-text-input.component';

describe('BeautifulTextInputComponent', () => {
  let component: BeautifulTextInputComponent;
  let fixture: ComponentFixture<BeautifulTextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautifulTextInputComponent]
    });
    fixture = TestBed.createComponent(BeautifulTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
