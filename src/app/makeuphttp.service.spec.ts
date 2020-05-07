import { TestBed } from '@angular/core/testing';

import { MakeuphttpService } from './makeuphttp.service';

describe('MakeuphttpService', () => {
  let service: MakeuphttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeuphttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
