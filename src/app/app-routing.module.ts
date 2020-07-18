import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListingEmployeeComponent } from './listing-employee/listing-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/listing', pathMatch: 'full' },
  { path: 'listing', component: ListingEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
