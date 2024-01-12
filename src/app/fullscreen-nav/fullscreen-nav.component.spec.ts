import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenNavComponent } from './fullscreen-nav.component';
import { MatIcon } from '@angular/material/icon';

describe('FullscreenNavComponent', () => {
  let component: FullscreenNavComponent;
  let fixture: ComponentFixture<FullscreenNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullscreenNavComponent, MatIcon ]
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
