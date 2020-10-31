import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }
  _employeeList = [{Id:"1",Department:"Sales and Marketing" },
   {Id:2,Department:"Human Resourses and Training"}, 
   {Id:"3",Department:"Accounts and Billing" },
   {Id:2,Department:"Customer Services"},
   {Id:"1",Department:"IT (Development)" },
   {Id:2,Department:"IT (Infrastructure)"},
    ];

  ngOnInit() {
  }

}