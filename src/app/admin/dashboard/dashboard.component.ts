import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DashboardService } from "../../dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Designation: string = '';
  Username: string = '';
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay: Date = new Date();
  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  constructor(private dashBoardService: DashboardService) {

  }
  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();
    this.Clients = ['ABC Infotech Ltd.', 'DEF Software Solutions', 'GHI Industries'];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    for (var i = 2019; i > 2010; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashBoardService.getTeamMembersSummary();
    this.TeamMembers = [
      {
        Region: 'East',
        Members:[ 
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' }
        ]
        },
      {
        Region: 'West', Members:[
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' }
        ]
        },
      {
        Region: 'South', Members:[
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' }
        ]
        },
      {
        Region: 'North', Members:[
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' }
        ]
        },
    ];

  }
  onProjectChange($event:any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52536;
    }
    else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 2345;
      this.CurrentExpenditure = 967823;
      this.AvailableFunds = 23456;
    }
    else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 234578;
      this.CurrentExpenditure = 967845;
      this.AvailableFunds = 23457;
    }
    else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost = 234589;
      this.CurrentExpenditure = 967867;
      this.AvailableFunds = 23458;
    }
  }
}
