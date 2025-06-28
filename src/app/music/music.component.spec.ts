import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComponent } from './music.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ButtonComponent } from '../button/button.component';
import { FullscreenNavComponent } from '../fullscreen-nav/fullscreen-nav.component';
import { MatIcon } from '@angular/material/icon';

describe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicComponent, NavBarComponent, ButtonComponent, FullscreenNavComponent, MatIcon ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
