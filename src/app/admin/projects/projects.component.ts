import { Component } from '@angular/core';
import { ProjectsService } from "../../projects.service";
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: any = null;
  deleteProject: Project = new Project();
  deleteIndex: any = null;

  constructor(private projectService: ProjectsService) {

  }
  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    );
  }

  //onSaveClick() {
  //  this.projectService.insertProject(this.newProject).subscribe(
  //    (response) => {
  //      var p: Project = new Project()
  //      {
  //        p.id = response.id;
  //        p.firstName = response.firstName;
  //        p.lastName = response.lastName;
  //        p.city = response.city;
  //        p.country = response.country;
  //        p.phone = response.phone;
  //        this.projects.push(p);

  //        this.newProject.firstName = "";
  //        this.newProject.lastName = "";
  //        this.newProject.city = "";
  //        this.newProject.country = "";
  //        this.newProject.city = "";
  //        this.newProject.phone = "";
  //      }
  //    },
  //    (error) => {
  //      console.log(error);
  //    }
  //  );

  //}

  //onEditClick(event: any, index: number) {
  //  this.editProject.projectID = this.projects[index].projectID;
  //  this.editProject.projectName = this.projects[index].projectName;
  //  this.editProject.dateOfStart = this.projects[index].dateOfStart;
  //  this.editProject.teamSize = this.projects[index].teamSize;
  //  this.editIndex = index;
  //}

  //onUpdateClick() {
  //  this.projectsService.updateProject(this.editProject).subscribe(
  //    (response: Project) => {
  //      var p: Project = new Project();
  //      p.projectID = response.projectID;
  //      p.projectName = response.projectName;
  //      p.dateOfStart = response.dateOfStart;
  //      p.teamSize = response.teamSize;
  //      this.projects[this.editIndex] = p;

  //      this.editProject.projectID = null;
  //      this.editProject.projectName = null;
  //      this.editProject.dateOfStart = null;
  //      this.editProject.teamSize = null;
  //    },
  //    (error) => {
  //      console.log(error);
  //    }
  //  );
  //}

  //onDeleteClick(event: any, index: number) {
  //  this.deleteIndex = index;
  //  this.deleteProject.projectID = this.projects[index].projectID;
  //  this.deleteProject.projectName = this.projects[index].projectName;
  //  this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
  //  this.deleteProject.teamSize = this.projects[index].teamSize;
  //}

  //onDeleteConfirmClick() {
  //  this.projectsService.deleteProject(this.deleteProject.projectID).subscribe(
  //    (response) => {
  //      this.projects.splice(this.deleteIndex, 1);
  //      this.deleteProject.projectID = null;
  //      this.deleteProject.projectName = null;
  //      this.deleteProject.teamSize = null;
  //      this.deleteProject.dateOfStart = null;
  //    },
  //    (error) => {
  //      console.log(error);
  //    }
  //  );
  //}

}
