import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadminLayoutComponent } from './dashboardadmin-layout.component';

describe('DashboardadminLayoutComponent', () => {
  let component: DashboardadminLayoutComponent;
  let fixture: ComponentFixture<DashboardadminLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardadminLayoutComponent]
    });
    fixture = TestBed.createComponent(DashboardadminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
