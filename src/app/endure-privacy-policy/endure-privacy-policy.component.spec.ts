import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndurePrivacyPolicyComponent } from './endure-privacy-policy.component';
import { ButtonComponent } from '../button/button.component';
import { EndureNavComponent } from '../endure-nav/endure-nav.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { EndureFooterComponent } from '../endure-footer/endure-footer.component';
import { FullscreenNavComponent } from '../fullscreen-nav/fullscreen-nav.component';
import { MatIcon } from '@angular/material/icon';

describe('EndurePrivacyPolicyComponent', () => {
  let component: EndurePrivacyPolicyComponent;
  let fixture: ComponentFixture<EndurePrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndurePrivacyPolicyComponent, ButtonComponent, EndureNavComponent, NavBarComponent, EndureFooterComponent, FullscreenNavComponent, MatIcon]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EndurePrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
