import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: '', pathMatch: 'full', redirectTo: 'userForm' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userForm', component: UserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-detail', component: UserDetailComponent },

  { path: 'employees-list', component: EmployeeListComponent }  ,
  { path: 'edit-employee/:id', component: EmployeeEditComponent },


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }