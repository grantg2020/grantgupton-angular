import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenNavComponent } from './fullscreen-nav.component';

describe('FullscreenNavComponent', () => {
  let component: FullscreenNavComponent;
  let fixture: ComponentFixture<FullscreenNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
