import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulButtonComponent } from './beautiful-button.component';

describe('BeautifulButtonComponent', () => {
  let component: BeautifulButtonComponent;
  let fixture: ComponentFixture<BeautifulButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautifulButtonComponent]
    });
    fixture = TestBed.createComponent(BeautifulButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
