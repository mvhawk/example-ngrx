import { TestBed } from '@angular/core/testing';

import { ShowContentService } from './show-content.service';

describe('ShowContentService', () => {
  let service: ShowContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
