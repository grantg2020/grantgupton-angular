import { TestBed } from '@angular/core/testing';

import { SmartwatchAppService } from './smartwatch-app.service';

describe('SmartwatchAppService', () => {
  let service: SmartwatchAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartwatchAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
