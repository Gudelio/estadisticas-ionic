import { TestBed } from '@angular/core/testing';

import { FirestimgService } from './firestimg.service';

describe('FirestimgService', () => {
  let service: FirestimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
