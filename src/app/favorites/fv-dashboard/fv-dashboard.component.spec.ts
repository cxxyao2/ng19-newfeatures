import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvDashboardComponent } from './fv-dashboard.component';

describe('FvDashboardComponent', () => {
  let component: FvDashboardComponent;
  let fixture: ComponentFixture<FvDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FvDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
