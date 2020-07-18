import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get(
      `http://dummy.restapiexample.com/api/v1/employee/` + id
    );
  }

  newEmployee(employee: any): Observable<any> {
    return this.http.post(
      `http://dummy.restapiexample.com/api/v1/create`,
      employee
    );
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put(
      `http://dummy.restapiexample.com/api/v1/update/` + employee.id,
      employee
    );
  }

  deleteEmployees(): Observable<any> {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/2');
  }
}
