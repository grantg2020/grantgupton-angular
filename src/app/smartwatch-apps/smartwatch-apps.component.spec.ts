import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwatchAppsComponent } from './smartwatch-apps.component';

describe('SmartwatchAppsComponent', () => {
  let component: SmartwatchAppsComponent;
  let fixture: ComponentFixture<SmartwatchAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartwatchAppsComponent ]
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
