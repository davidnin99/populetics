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

  constructor(private service: EmployeesService) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe((data) => {
      this.employees = data.data;
    });
  }
  // TODO : Me queda hacer todo el tema del creacion, que cuando lcikc en un personaje, este aparezca su info : queda pasar bien el parametro por url
  // y recibirlo bien, queda cargar bien el update ( una vez este esto, es bien easy peasy
  // Hacer el delete
  // hacer pagina error
  // Diseño interior
  // Diseño exterior
}
