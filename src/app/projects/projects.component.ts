import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _projctService: ProjectService,private datePipe: DatePipe) { }

  ngOnInit() {
     var date = new Date();
  }
       get ProjectList() {
    return this._projctService.getAllProject();
  }

}