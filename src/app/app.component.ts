import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../app/services/employees.service';

import { Employees, responseApi } from '../app/interfaces/interfaces';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>Prueba de trabajo populetics</h1>
    <nav>
      <a routerLink="/listing">Listado</a>
      <a routerLink="/create-new-employeed">Creacion</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public employees: Array<Employees> = [];

  constructor(private service: EmployeesService) {}

  ngOnInit(): void {
    this.service.getEmployees().subscribe((data) => {
      this.employees = data.data;
    });
  }
}
