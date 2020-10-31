import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
   message: string = "Employee Details"
    public _contactForm: FormGroup;

  constructor( private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,
   private dialogRef: MatDialogRef<UpdateDialogComponent>,
   private _employeeService: EmployeeService 
   ) {
 console.log(this.data);
    }
      onNoClick(): void {
    this.dialogRef.close();
   }
 

      
  ngOnInit() {
   this._contactForm = this._formBuilder.group({
     Id: [this.data.Id],
      FirstName: [ this.data.FirstName, [Validators.required]],
      LastName: [ this.data.LastName, [Validators.required]],
       Title: [ this.data.Title, [Validators.required]],
       Department: [this.data.Department,[Validators.required]],
      Age: [ this.data.Age, [Validators.required]],
      imageUrl: [this.data.imageUrl]
    });


  }


 onSubmit() {
     console.log(this._contactForm.value);
     this._employeeService.updateEmployee(this._contactForm.value);
  
   // this.data.employee.FirstName =  this.data.employee.FirstName;
 //console.log(this._contactForm.value.FirstName);
   this.dialogRef.close();
 }
}