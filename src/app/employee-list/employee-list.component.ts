import { Component, OnInit } from '@angular/core';
 import {Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
 import {DialogComponent} from '../dialog/dialog.component';
 import {UpdateDialogComponent } from '../update-dialog/update-dialog.component';
;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router: Router,private _employeeService: EmployeeService ,public dialog: MatDialog) {}
  
  
     

     openDialog(Employee) {
      // console.log(Employee)
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

       dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      // const index = this.Company_Employees.indexOf(Employee,0)
      // if (index >-1) {
      //   this.Company_Employees.splice(index,1);
      // }
      this._employeeService.deleteEmployee(Employee)
      }
    });
     }
       get EmployeList() {
    return this._employeeService.getAllEmployee();
  }


  updateDialog(id: number) {
    //let index = this.Company_Employees.indexOf(Employee);
     const Employee = this._employeeService.getAllEmployee().find(c => c.Id === id);
  let dialogRef = this.dialog.open(UpdateDialogComponent ,{ data: Employee});
     //dialogRef.afterClosed().subscribe(result => {this.Company_Employees= result})
 
  }


  ngOnInit() {
  }

}