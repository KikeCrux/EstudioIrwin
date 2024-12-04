import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarComponent } from './agendar.component';

describe('AgendarComponent', () => {
  let component: AgendarComponent;
  let fixture: ComponentFixture<AgendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarComponent]
    });
    fixture = TestBed.createComponent(AgendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
