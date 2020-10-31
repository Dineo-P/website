import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HelloComponent } from './hello.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogComponent } from './dialog/dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './project.service';
import {DatePipe} from '@angular/common';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentService } from './department.service';





@NgModule({
  imports:[AppRoutingModule, BrowserModule,BrowserAnimationsModule, FormsModule,ReactiveFormsModule,MatCardModule,MatButtonModule,MatGridListModule,MatDialogModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatInputModule,MatExpansionModule ],

  declarations: [ AppComponent, HelloComponent, DialogComponent, UpdateDialogComponent, EmployeeComponent, EmployeeListComponent, NavbarComponent, ProjectsComponent, DepartmentsComponent ],
  entryComponents:[DialogComponent,UpdateDialogComponent],
   providers: [EmployeeService, ProjectService,DatePipe, DepartmentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
