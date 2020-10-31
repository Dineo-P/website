import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onNavigateEmp() {
    this.router.navigate(['/employee']);
  }
  
  onNavigateProject() {
      this.router.navigate(['/projects']);
  }
  onNavigatedepartment() {
      this.router.navigate(['/departments']);
  }
}