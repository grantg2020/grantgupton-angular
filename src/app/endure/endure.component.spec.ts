import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndureComponent } from './endure.component';

describe('EndureComponent', () => {
  let component: EndureComponent;
  let fixture: ComponentFixture<EndureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndureComponent ]
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
