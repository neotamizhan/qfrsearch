import { TestBed } from '@angular/core/testing';

import { QfrServiceService } from './qfr-service.service';

describe('QfrServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QfrServiceService = TestBed.get(QfrServiceService);
    expect(service).toBeTruthy();
  });
});
