import { Injectable } from '@angular/core';
import { EmployeeClass } from './employee';

@Injectable()
export class EmployeeService {
 _employeeList: EmployeeClass[] =   [{Id:1,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Department:"Sales", Age:21, imageUrl:"https://us.123rf.com/450wm/sam74100/sam741001503/sam74100150300105/38081251-portrait-of-a-young-african-american-business-woman-black-people.jpg?ver=6" },
    {Id:2,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Department:"Health", Age:24, imageUrl: "https://www.talk-business.co.uk/wp-content/uploads/2019/02/shutterstock_563534299.jpg"}, 
    {Id:3,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer",Department:"Educati", Age:21, imageUrl:"https://jobstars.com/wp-content/uploads/2018/08/girl-1868930_1280.jpg" }, 
    {Id:4,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst",Department:"Logistic", Age:24, imageUrl: "https://blackeoejournal.com/wp-content/uploads/2019/12/confident-black-woman.jpg"},
    {Id:5,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer",Department:"Operations", Age:21, imageUrl:"https://images.assetsdelivery.com/compings_v2/michaeljung/michaeljung1302/michaeljung130200277.jpg" },
    {Id:6,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst",Department:"Sales", Age:24, imageUrl: "https://us.123rf.com/450wm/francesco83/francesco831502/francesco83150200037/36350352-photo-of-african-smiling-businessman-standing-next-to-the-glass-wall.jpg?ver=6"},
    {Id:7,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer",Department:"Communication", Age:21, imageUrl:"https://www.lsmensclothing.com/wp-content/uploads/2018/10/what-color-suit-to-buy.jpeg" },
    {Id:8,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst",Department:"Transport", Age:24, imageUrl: "https://cdn.cbtnews.com/wp-content/uploads/2017/04/shutterstock_403315558.jpg"}, 
    {Id:9,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer",Department:"Health", Age:21, imageUrl:"https://image.shutterstock.com/image-photo/african-american-customer-support-operator-260nw-1698411634.jpg" },
    {Id:10,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst",Department:"IT", Age:24, imageUrl: "https://secureservercdn.net/192.169.221.188/ca0.384.myftpupload.com/wp-content/uploads/2015/02/5-startegies-for-finding-a-dream-job.jpg"}];
  constructor() { } 


getAllEmployee() {
    return this._employeeList;
  }

updateEmployee(emp: EmployeeClass) {
    const index = this. _employeeList.findIndex(c => c.Id === emp.Id);
     if ( index  >-1) {
    this. _employeeList[index] = emp;
     }
  }

  addEmployeee(emp: EmployeeClass) {
     emp.Id = this._employeeList.length + 1;
     this._employeeList.push(emp);
  }
  deleteEmployee(id: number) {
    const emp = this._employeeList.findIndex(c => c.Id == id);
     if (emp >-1) {
    this._employeeList.splice(emp,1);

  }
  }
}