import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiService } from './service/api.service';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { HttpErrorInterceptor } from './_middle-ware/httperrorinterceptor.service';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { FocusDirective } from './directives/focus.directive';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { ResetrPasswordComponent } from './core/resetr-password/resetr-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerComponent } from './components/customer/customer.component';


 

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    UserComponent,
    MatchPasswordDirective,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NoPageFoundComponent,
    FocusDirective,
    ForgotPasswordComponent,
    ResetrPasswordComponent,
    CustomerComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot(),
    
    NgxUiLoaderModule,
    PasswordStrengthMeterModule,
NgxPaginationModule

  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],

})

export class AppModule { }