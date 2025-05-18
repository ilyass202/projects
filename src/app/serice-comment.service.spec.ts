import { TestBed } from '@angular/core/testing';

import { SericeCommentService } from './serice-comment.service';

describe('SericeCommentService', () => {
  let service: SericeCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericeCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
