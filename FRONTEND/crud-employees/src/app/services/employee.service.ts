import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httppClient: HttpClient) { }

  public getAllEmployees(): Observable<Employee[]> {
    return this.httppClient.get<Employee[]>(`${environment.baseUrl}/employees`);
  }

  public registerNewEmployee(emp: Employee): Observable<Object> {
    return this.httppClient.post<Object>(`${environment.baseUrl}/employee`, emp)
  }

  public searchEmployeebyId(id: number): Observable<Employee> {
    return this.httppClient.get<Employee>(`${environment.baseUrl}/employee/${id}`)
  }

  public deleteEmployee(id: number): Observable<Object> {
    return this.httppClient.delete(`${environment.baseUrl}/employee/${id}`)
  }

}
