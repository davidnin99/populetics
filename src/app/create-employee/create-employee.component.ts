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
          <button (click)="createEmployeed()"></button>
        </div>
        <div *ngIf="!isNewEmployeed()">
          <button (click)="updateEmployeed()"></button>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  public idEmployeed: string;
  public employee: Employees;

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.idEmployeed = this.route.snapshot.paramMap.get('id');
    console.log('this.idEmployeed', this.idEmployeed);
    this.idEmployeed ? this.getEmployeedSelected() : (this.idEmployeed = '0');
    if (this.idEmployeed !== '0') {
      this.getEmployeedSelected();
    }
  }

  getEmployeedSelected(): void {
    this.employeesService.getEmployee(this.idEmployeed).subscribe((data) => {
      this.employee = data.data;
      console.log('holaola', this.employee);
    });
  }

  createEmployeed(): void {
    console.log(this.employee, 'tjios.lemplotes');
  }

  updateEmployeed(): void {}

  isNewEmployeed(): boolean {
    return this.idEmployeed === '0';
  }
}
