import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Employees } from '../interfaces/interfaces';
import { EmployeesService } from '../services/employees.service';
@Component({
  selector: 'app-create-employee',
  template: `
    <div>
      <form>
        <label for="fname">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          [(ngModel)]="employee.employee_name"
        /><br /><br />
        <label for="lname">Salary</label>
        <input
          type="text"
          id="salary"
          name="salary"
          [(ngModel)]="employee.employee_salary"
        /><br /><br />
        <label for="lname">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          [(ngModel)]="employee.employee_age"
        /><br /><br />
        <div *ngIf="isNewEmployeed()">
          <button (click)="createEmployeed()">Crear</button>
        </div>
        <div *ngIf="!isNewEmployeed()">
          <button (click)="updateEmployeed()">Actualizar</button>
          <button (click)="deleteEmployees()">Borrar</button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  public idEmployeed: string;
  public employee: Employees = new Employees();

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.idEmployeed = this.route.snapshot.paramMap.get('id');
    this.idEmployeed ? this.getEmployeedSelected() : (this.idEmployeed = '0');
    if (this.idEmployeed !== '0') {
      this.getEmployeedSelected();
    }
  }

  getEmployeedSelected(): void {
    // this.employeesService.getEmployee(this.idEmployeed).subscribe((data) => {
    //   this.fakeEmployee = data.data;
    // }); El endPoinjt no funciona correctamente, asi que aqui tendriamos que hacer la llamada que esta en las lineas de arriba, creo una respuesta fake
    this.employee = {
      id: '13',
      employee_name: 'Sebastian',
      employee_salary: '25.000',
      employee_age: '23',
      profile_image: '',
    };
  }

  createEmployeed(): void {
    this.employeesService.newEmployee(this.idEmployeed).subscribe(
      () => window.alert('Se ha creado correctamente'),
      (error) => console.log('error', error)
    );
  }

  updateEmployeed(): void {
    this.employeesService.updateEmployee(this.employee).subscribe(
      () => window.alert('Se ha actualizado correctamente'),
      (error) => console.log('error', error)
    );
  }

  deleteEmployees(): void {
    this.employeesService.deleteEmployee(this.idEmployeed).subscribe(
      () => window.alert('Se han eliminado correctamente'),
      (error) => console.log('error', error)
    );
  }

  isNewEmployeed(): boolean {
    return this.idEmployeed === '0';
  }
}
