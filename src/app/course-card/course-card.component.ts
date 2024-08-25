import {
  Component,
  computed,
  inject,
  Input,
  OnInit,
  signal,
} from "@angular/core";
import { CourseCardService } from "../course-card.service";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  standalone: true,
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true }) 
  public course: Course;
  public courses = signal<any[]>([]);
  private courseService = inject(CourseCardService);

  ngOnInit(): void {
    this.getAllCourses();
  }

  public onClick() {
    
  }

  private getAllCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (courses) => this.courses.set(courses),
      error: (err) => console.error("Error loading courses", err),
    });
  }
}
