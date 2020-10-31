import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  constructor(private router: Router,private _employeeService: EmployeeService) { }

  ngOnInit() {
  }
  save(employee) {
this._employeeService.addEmployeee(employee);
  this.router.navigate(['/']);
  }

}