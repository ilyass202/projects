import { TestBed } from '@angular/core/testing';

import { ServicePosteService } from './service-poste.service';

describe('ServicePosteService', () => {
  let service: ServicePosteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePosteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
