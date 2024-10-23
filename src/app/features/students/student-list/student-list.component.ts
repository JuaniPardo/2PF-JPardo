import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../core/models/student";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {StudentsService} from "../../../core/services/student.service";
import {MatDialog} from "@angular/material/dialog";
import {StudentFormComponent} from "../student-form/student-form.component";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['apellido', 'nombre', 'email', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>;
  isLoading: boolean = false;
  showInactive: boolean = false;

  user = {
    firstName: 'Juan',
    lastName: 'Pardo',
    role: 'admin',
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Constructor
  constructor(
    private studentsService: StudentsService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.isLoading = true;
    if (this.showInactive) {
      this.studentsService.getInactiveStudents().subscribe(
        students => {
          this.dataSource.data = students;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        });
    } else {
      this.studentsService.getActiveStudents().subscribe(
        students => {
          this.dataSource.data = students;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        });
    }
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

// Función para abrir el diálogo de creación/edición de students.
  openDialog(s: Student | null): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      data: s || null,
      width: '500px',
      disableClose: false
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (!!result) {
          if (s) {
            this.updateAlumno(s.id, result);
          } else {
            this.addAlumno(result);
          }
        }
      }
    });
  }

// Función que llama al servicio para baja lógica del alumno.
  deleteStudent(row: { id: number; }) {
    this.isLoading = true;
    this.studentsService.deleteStudent(row.id).subscribe({
      next: (dataAlumnos) => {
        this.dataSource.data = dataAlumnos;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

// Función que llama al servicio para actualizar el alumno.
  private updateAlumno(id: number, result: any): void {
    this.isLoading = true;
    this.studentsService.updateStudent(id, result).subscribe({
      next: (dataAlumnos) => {
        this.dataSource.data = dataAlumnos;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

// Función que llama al servicio para crear el alumno.
  private addAlumno(result: Student): void {
    this.isLoading = true;
    this.studentsService.addStudent(result).subscribe({
      next: (dataAlumnos) => {
        this.dataSource.data = dataAlumnos;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  toggleInactive($event: MatSlideToggleChange) {
    this.showInactive = $event.checked;
    this.loadStudents();
  }
}