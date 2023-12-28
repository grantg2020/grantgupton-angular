import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ButtonComponent } from '../button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ ExperiencesComponent, NavBarComponent, ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
