import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndureComponent } from './endure.component';
import { EndureNavComponent } from '../endure-nav/endure-nav.component';
import { ButtonComponent } from '../button/button.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { EndureFooterComponent } from '../endure-footer/endure-footer.component';
import { FullscreenNavComponent } from '../fullscreen-nav/fullscreen-nav.component';
import { MatIcon } from '@angular/material/icon';

describe('EndureComponent', () => {
  let component: EndureComponent;
  let fixture: ComponentFixture<EndureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndureComponent, EndureNavComponent, ButtonComponent, NavBarComponent, EndureFooterComponent, FullscreenNavComponent, MatIcon ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
