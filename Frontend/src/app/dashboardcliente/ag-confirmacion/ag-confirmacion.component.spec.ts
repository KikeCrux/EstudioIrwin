import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgConfirmacionComponent } from './ag-confirmacion.component';

describe('AgConfirmacionComponent', () => {
  let component: AgConfirmacionComponent;
  let fixture: ComponentFixture<AgConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgConfirmacionComponent]
    });
    fixture = TestBed.createComponent(AgConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
