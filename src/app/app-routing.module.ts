import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: '', pathMatch: 'full', redirectTo: 'userForm' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'userForm', component: UserComponent },
  { path: 'user-detail', component: UserDetailComponent },

  { path: 'employees-list', component: EmployeeListComponent }  ,
  { path: 'edit-employee/:id', component: EmployeeEditComponent },


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }