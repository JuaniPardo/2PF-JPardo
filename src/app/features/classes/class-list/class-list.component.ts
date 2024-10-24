import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Class} from '../../../core/models/class';
import {ClassService} from '../../../core/services/class.service';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ClassFormComponent} from '../class-form/class-form.component';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss', '../../../shared/styles/lists.scss']
})
export class ClassListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'description', 'actions'];
  dataSource: MatTableDataSource<Class> = new MatTableDataSource<Class>();
  isLoading: boolean = false;
  showInactive: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private classesService: ClassService,
    private dialog: MatDialog
  ) {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.loadClasses();
  }

  private loadClasses() {
    this.isLoading = true;
    if (this.showInactive) {
      this.classesService.getInactiveClasses().subscribe({
        next: (classes) => {
          this.dataSource.data = classes;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        },
      });
      } else {
      this.classesService.getActiveClasses().subscribe({
        next: (classes) => {
          this.dataSource.data = classes;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        },
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(c: Class | null): void {
    const dialogRef = this.dialog.open(ClassFormComponent, {
      data: c || null,
      width: '500px',
      disableClose: false
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (!!result) {
          if (c) {
            this.updateClass(c.id, result);
          } else {
            this.addClass(result);
          }
        }
      }
    });
  }

  updateClass(id: number, result: any): void {
    this.isLoading = true;
    this.classesService.updateClass(id, result).subscribe({
      next: (dataClasses) => {
        this.dataSource.data = dataClasses;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  addClass(result: Class): void {
    this.isLoading = true;
    this.classesService.addClass(result).subscribe({
      next: (dataClasses) => {
        this.dataSource.data = dataClasses;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  deleteClass(row: { id: number; }) {
    this.isLoading = true;
    this.classesService.deleteClass(row.id).subscribe({
      next: (dataClasses) => {
        this.dataSource.data = dataClasses;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  toggleInactive($event: MatSlideToggleChange) {
    this.showInactive = $event.checked;
    this.loadClasses();
  }

}

