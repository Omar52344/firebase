import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireElementComponent } from './fire-element.component';

describe('FireElementComponent', () => {
  let component: FireElementComponent;
  let fixture: ComponentFixture<FireElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireElementComponent]
    });
    fixture = TestBed.createComponent(FireElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
