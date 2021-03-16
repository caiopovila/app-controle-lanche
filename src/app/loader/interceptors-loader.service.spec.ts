import { TestBed } from '@angular/core/testing';

import { InterceptorsLoaderService } from './interceptors-loader.service';

describe('InterceptorsLoaderService', () => {
  let service: InterceptorsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
