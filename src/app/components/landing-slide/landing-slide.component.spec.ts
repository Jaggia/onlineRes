import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSlideComponent } from './landing-slide.component';

describe('LandingSlideComponent', () => {
  let component: LandingSlideComponent;
  let fixture: ComponentFixture<LandingSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
