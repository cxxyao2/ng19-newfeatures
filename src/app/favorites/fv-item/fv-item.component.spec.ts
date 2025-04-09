import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvItemComponent } from './fv-item.component';

describe('FvItemComponent', () => {
  let component: FvItemComponent;
  let fixture: ComponentFixture<FvItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FvItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FvItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
