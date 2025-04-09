import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxResourceDemoComponent } from './rx-resource-demo.component';

describe('RxResourceDemoComponent', () => {
  let component: RxResourceDemoComponent;
  let fixture: ComponentFixture<RxResourceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxResourceDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxResourceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
