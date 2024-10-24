import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClassesRoutingModule} from './classes-routing.module';
import {ClassListComponent} from './class-list/class-list.component';
import {ClassFormComponent} from './class-form/class-form.component';

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import { ClassDetailComponent } from './class-detail/class-detail.component';


@NgModule({
  declarations: [
    ClassListComponent,
    ClassFormComponent,
    ClassDetailComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule
  ]
})
export class ClassesModule {
}
