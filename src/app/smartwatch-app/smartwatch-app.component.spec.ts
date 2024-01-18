import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwatchAppComponent } from './smartwatch-app.component';

describe('SmartwatchAppComponent', () => {
  let component: SmartwatchAppComponent;
  let fixture: ComponentFixture<SmartwatchAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartwatchAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartwatchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
