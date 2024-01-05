import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndureNavComponent } from './endure-nav.component';

describe('EndureNavComponent', () => {
  let component: EndureNavComponent;
  let fixture: ComponentFixture<EndureNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndureNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndureNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
