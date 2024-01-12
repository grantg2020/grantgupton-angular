import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ButtonComponent } from '../button/button.component';
import { FullscreenNavComponent } from '../fullscreen-nav/fullscreen-nav.component';
import { MatIcon } from '@angular/material/icon';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent, NavBarComponent, ButtonComponent, FullscreenNavComponent, MatIcon ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
