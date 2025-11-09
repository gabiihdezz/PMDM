import { TestBed } from '@angular/core/testing';

import { NavidadService } from './navidad-service';

describe('NavidadService', () => {
  let service: NavidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
