import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioDetailComponent } from './portafolio-detail.component';

describe('PortafolioDetailComponent', () => {
  let component: PortafolioDetailComponent;
  let fixture: ComponentFixture<PortafolioDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortafolioDetailComponent]
    });
    fixture = TestBed.createComponent(PortafolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
