import { Component, OnInit } from '@angular/core';

import { Employees } from '../interfaces/interfaces';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-listing-employee',
  template: `
    <div *ngIf="employees">
      <div>
        <table style="width:100%">
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
          <tr *ngFor="let employee of employees">
            <td>
              <a [routerLink]="['/create', employee.id]">{{
                employee.employee_name
              }}</a>
            </td>
            <td>{{ employee.employee_salary }}</td>
            <td>{{ employee.employee_age }}</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./listing-employee.component.css'],
})
export class ListingEmployeeComponent implements OnInit {
  public employees: Array<Employees> = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data) => {
      this.employees = data.data;
    });
  }
  // TODO :
  // Diseño interior
  // Diseño exterior
}
