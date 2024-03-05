import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { ButtonComponent } from '../button/button.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ HomeComponent, NavBarComponent, MobileNavComponent, ButtonComponent, AboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
