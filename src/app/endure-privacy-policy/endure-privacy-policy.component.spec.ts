import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndurePrivacyPolicyComponent } from './endure-privacy-policy.component';
import { ButtonComponent } from '../button/button.component';
import { EndureNavComponent } from '../endure-nav/endure-nav.component';

describe('EndurePrivacyPolicyComponent', () => {
  let component: EndurePrivacyPolicyComponent;
  let fixture: ComponentFixture<EndurePrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndurePrivacyPolicyComponent, ButtonComponent, EndureNavComponent ]
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
