import { TestBed } from '@angular/core/testing';

import { CourseCardService } from './course-card.service';

describe('CourseCardService', () => {
  let service: CourseCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
