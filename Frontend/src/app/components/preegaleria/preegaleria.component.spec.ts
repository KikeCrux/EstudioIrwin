import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreegaleriaComponent } from './preegaleria.component';

describe('PreegaleriaComponent', () => {
  let component: PreegaleriaComponent;
  let fixture: ComponentFixture<PreegaleriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreegaleriaComponent]
    });
    fixture = TestBed.createComponent(PreegaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
