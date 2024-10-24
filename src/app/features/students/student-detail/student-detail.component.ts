import {Component} from '@angular/core';
import {Student} from "../../../core/models/student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentsService} from "../../../core/services/student.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss', '../../../shared/styles/details.scss'],
})
export class StudentDetailComponent {
  studentID!: number;
  student!: Student;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Obtener el ID del estudiante desde la ruta.
    this.route.params.subscribe((params) => {
      this.studentID = +params['id']; // uso el '+' para parsear
      this.loadStudent();
    });
  }

  private loadStudent(): void {
    this.isLoading = true;
    this.studentsService.getStudentById(this.studentID).subscribe({
      next: (student) => {
        this.student = student;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    // Redireccionar al listado de estudiantes.
    this.router.navigate(['/students']).then();
  }
}
