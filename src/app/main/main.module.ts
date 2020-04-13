import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
  }
];
@NgModule({
  declarations: [TableComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule
  ]
})
export class MainModule { }
