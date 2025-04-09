import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvListComponent } from './fv-list.component';

describe('FvListComponent', () => {
  let component: FvListComponent;
  let fixture: ComponentFixture<FvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FvListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
