import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    FullNamePipe
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    FullNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
  ]
})
export class SharedModule { }
