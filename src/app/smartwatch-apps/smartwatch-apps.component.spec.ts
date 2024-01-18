import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwatchAppsComponent } from './smartwatch-apps.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ButtonComponent } from '../button/button.component';
import { FullscreenNavComponent } from '../fullscreen-nav/fullscreen-nav.component';
import { MatIcon } from '@angular/material/icon';
import { SmartwatchAppComponent } from '../smartwatch-app/smartwatch-app.component';

describe('SmartwatchAppsComponent', () => {
  let component: SmartwatchAppsComponent;
  let fixture: ComponentFixture<SmartwatchAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartwatchAppsComponent, NavBarComponent, ButtonComponent, FullscreenNavComponent, MatIcon, SmartwatchAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartwatchAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
