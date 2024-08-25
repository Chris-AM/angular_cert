import { computed, Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { COURSES } from 'src/db-data';

@Injectable({
  providedIn: 'root'
})
export class CourseCardService {
  public getAllCourses() {
    return of(COURSES);
  }
}
