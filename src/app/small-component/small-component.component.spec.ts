import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallComponentComponent } from './small-component.component';

describe('SmallComponentComponent', () => {
  let component: SmallComponentComponent;
  let fixture: ComponentFixture<SmallComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallComponentComponent]
    });
    fixture = TestBed.createComponent(SmallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
