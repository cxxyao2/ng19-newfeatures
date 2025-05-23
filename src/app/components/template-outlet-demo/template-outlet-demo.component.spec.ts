import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletDemoComponent } from './template-outlet-demo.component';

describe('TemplateOutletDemoComponent', () => {
  let component: TemplateOutletDemoComponent;
  let fixture: ComponentFixture<TemplateOutletDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateOutletDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateOutletDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
