import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Class } from '../../../core/models/class';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss', '../../../shared/styles/dialog-form.scss']
})
export class ClassFormComponent {
  classForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClassFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Class | null
  ) {
    this.classForm = this.fb.group({
      title: [data?.title, null],
      description: [data?.description, null],
      course: [data?.courseId, null]
    });
  }

  save() {
    if (this.classForm.invalid) {
      this.classForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.classForm.value);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
