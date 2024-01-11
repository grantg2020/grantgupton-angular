import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndureFooterComponent } from './endure-footer.component';

describe('EndureFooterComponent', () => {
  let component: EndureFooterComponent;
  let fixture: ComponentFixture<EndureFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndureFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndureFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
