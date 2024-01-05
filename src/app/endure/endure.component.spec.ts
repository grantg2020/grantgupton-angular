import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndureComponent } from './endure.component';
import { EndureNavComponent } from '../endure-nav/endure-nav.component';
import { ButtonComponent } from '../button/button.component';

describe('EndureComponent', () => {
  let component: EndureComponent;
  let fixture: ComponentFixture<EndureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndureComponent, EndureNavComponent, ButtonComponent ]
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
