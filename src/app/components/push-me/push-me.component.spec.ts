import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushMeComponent } from './push-me.component';

describe('PushMeComponent', () => {
  let component: PushMeComponent;
  let fixture: ComponentFixture<PushMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
