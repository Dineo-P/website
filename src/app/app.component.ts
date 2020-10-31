import { Component, VERSION } from '@angular/core';
 import {Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeService } from './employee.service';
 import {DialogComponent} from './dialog/dialog.component';
 import {UpdateDialogComponent } from './update-dialog/update-dialog.component';
;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
 
  
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(private router: Router,private _employeeService: EmployeeService ,public dialog: MatDialog) {}
  
  Company_Employees = 
    [{Id:1,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://us.123rf.com/450wm/sam74100/sam741001503/sam74100150300105/38081251-portrait-of-a-young-african-american-business-woman-black-people.jpg?ver=6" },
    {Id:2,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://www.talk-business.co.uk/wp-content/uploads/2019/02/shutterstock_563534299.jpg"}, 
    {Id:3,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://jobstars.com/wp-content/uploads/2018/08/girl-1868930_1280.jpg" },
    {Id:4,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://blackeoejournal.com/wp-content/uploads/2019/12/confident-black-woman.jpg"},
    {Id:5,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://images.assetsdelivery.com/compings_v2/michaeljung/michaeljung1302/michaeljung130200277.jpg" },
    {Id:6,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://us.123rf.com/450wm/francesco83/francesco831502/francesco83150200037/36350352-photo-of-african-smiling-businessman-standing-next-to-the-glass-wall.jpg?ver=6"},
    {Id:7,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://www.lsmensclothing.com/wp-content/uploads/2018/10/what-color-suit-to-buy.jpeg" },
    {Id:8,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://cdn.cbtnews.com/wp-content/uploads/2017/04/shutterstock_403315558.jpg"}, 
    {Id:9,FirstName:"Portia", LastName: "Mashaba", Title: "Software Developer", Age:21, img:"https://image.shutterstock.com/image-photo/african-american-customer-support-operator-260nw-1698411634.jpg" },
    {Id:10,FirstName:"Nelly", LastName: "Msiza", Title: "Business Analyst", Age:24, img: "https://secureservercdn.net/192.169.221.188/ca0.384.myftpupload.com/wp-content/uploads/2015/02/5-startegies-for-finding-a-dream-job.jpg"}];

     

     openDialog(Employee) {
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
      const index = this.Company_Employees.indexOf(Employee,0)
      if (index >-1) {
        this.Company_Employees.splice(index,1);
      }
      }
    });
     }
       get EmployeList() {
    return this._employeeService.getAllEmployee();
  }


  updateDialog(id: number) {
    //let index = this.Company_Employees.indexOf(Employee);
     const EmployeeClass = this._employeeService.getAllEmployee().find(c => c.Id === id);
  let dialogRef = this.dialog.open(UpdateDialogComponent ,{ data: EmployeeClass});
     //dialogRef.afterClosed().subscribe(result => {this.Company_Employees= result})
 
  }


  onNavigateEmp() {
    //this.router.navigate(['/employeeList']);
    //this.router.navigateByUrl('/employee')
    
  }
  
  
}


 