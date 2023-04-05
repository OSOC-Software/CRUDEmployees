import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';

const routes: Routes = [
  { path: "employees", component: ListEmployeesComponent, },
  { path: "register", component: RegisterEmployeeComponent, },
  { path: "detail-employee/:id", component: DetailsEmployeeComponent, },
  { path: "edit-employee/:id", component: RegisterEmployeeComponent, },
  { path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
