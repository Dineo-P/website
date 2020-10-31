import { Injectable } from '@angular/core';
import { Project } from './projects';

@Injectable()
export class ProjectService {
 _projectList: Project[] =  [{Id:1,Name:"FarmVision", Description: "is involved in the planning, implementation and management of farming projects in Africa. The focus areas at present are projects relating to agricultural development", ProjectDate: new Date(2012,11,8), ImplemntingDepartment:"Agriculture"},
 {Id:2,Name:"Gautrain Rapid", Description: "The Gautrain is the first world-class rapid rail link to be built in the country to connect commuters and alleviate congestion on the provincial road network", ProjectDate: new Date(2010,11,8), ImplemntingDepartment:"Trasport"},
 {Id:3,Name:"Rhinestone", Description: "We are proud to be associated with Motla Engineering in providing an energy-efficient lighting solution", ProjectDate: new Date(2013,11,8), ImplemntingDepartment:"Eneryg and Resource"},
  {Id:4,Name:"S'hamba Sonke", Description: "Moving Together is a nationwide drive to create jobs by maintaining and constructing road infrastructure", ProjectDate: new Date(2014,11,8), ImplemntingDepartment:"Education"},
   {Id:5,Name:"Raubex", Description: "prides itself as a world class heavy sector construction sector company with a focus on infrastructure development that operates across Africa.", ProjectDate: new Date(2015,11,8), ImplemntingDepartment:"Mining"},
    {Id:6,Name:"BATTERY PARK", Description: "We are very proud to be associated with Element Consulting Engineers in providing a successful decorative LED lighting solution for this prestigious project", ProjectDate: new Date(2016,11,6), ImplemntingDepartment:"Eneryg and Resources"},
     {Id:7,Name:"Lesotho Highlands", Description: "is an ongoing water supply project with a hydropower component, developed in partnership between the governments of Lesotho and South Africa", ProjectDate: new Date(12,12,2007), ImplemntingDepartment:"Water & Sanitation"},
      {Id:8,Name:"Culinary", Description: "Culinary Equipment Company  is your source for the best industrial kitchen & catering equipment, with a wide range of world-class.", ProjectDate: new Date(2019,9,3), ImplemntingDepartment:"Agriculture"},
       {Id:9,Name:"SweepSouth", Description: "SweepSouth is bringing harmony to homes across South Africa with a fresh approach to home cleaning services", ProjectDate: new Date(2010,5,6), ImplemntingDepartment:"cleaning"},
        {Id:10,Name:"Stefanutti Stocks", Description: "is one of South Africa’s leading construction companies with a capacity to deliver a range of projects of any scale to a multitude of clients.", ProjectDate: new Date(2010,11,12), ImplemntingDepartment:"Mining and Infrastructure"},]
  constructor() { }

getAllProject() {
    return this._projectList;
  }

}