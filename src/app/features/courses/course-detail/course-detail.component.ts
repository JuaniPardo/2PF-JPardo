import { Component } from '@angular/core';
import {Course} from "../../../core/models/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../../core/services/course.service";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss', '../../../shared/styles/details.scss'],
})
export class CourseDetailComponent {
  courseID!: number;
  course!: Course;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CourseService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Obtener el ID del curso desde la ruta.
    this.route.params.subscribe((params) => {
      this.courseID = +params['id']; // uso el '+' para parsear
      this.loadCourse();
    });
  }

  private loadCourse(): void {
    this.isLoading = true;
    this.coursesService.getCourseById(this.courseID).subscribe({
      next: (course) => {
        this.course = course;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    // Redireccionar al listado de cursos.
    this.router.navigate(['/courses']).then();
  }

}