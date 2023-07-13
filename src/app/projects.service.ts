import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  urlPrefix: string = "https://ecommerceapitest.azure-api.net";
  constructor(private httpClient: HttpClient)
  {

  }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.urlPrefix + '/api/Customer/GetAll')
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.urlPrefix + "api/Customer/CreateCustomer", newProject, { responseType: 'json' });
  }

  updateProject(ProjectID: number,existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(this.urlPrefix + "api/Customer/UpdateCustomer/" + ProjectID, existingProject, {responseType: 'json'});
  }

  deleteProject(ProjectID: number): Observable<String> {
    return this.httpClient.delete<string>(this.urlPrefix + "api/Order/DeleteOrder/" + ProjectID)
  }

  getProjectById(ProjectID:number): Observable<Project> {
    return this.httpClient.get<Project>(this.urlPrefix + 'api/Customer/GetCustomerById/' + ProjectID)
  }

}
