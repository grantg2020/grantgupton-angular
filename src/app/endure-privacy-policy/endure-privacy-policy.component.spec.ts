import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndurePrivacyPolicyComponent } from './endure-privacy-policy.component';

describe('EndurePrivacyPolicyComponent', () => {
  let component: EndurePrivacyPolicyComponent;
  let fixture: ComponentFixture<EndurePrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndurePrivacyPolicyComponent ]
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
