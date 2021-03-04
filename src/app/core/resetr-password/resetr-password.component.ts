import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetr-password',
  templateUrl: './resetr-password.component.html',
  styleUrls: ['./resetr-password.component.css']
})
export class ResetrPasswordComponent implements OnInit {

  // TokenStatus = this.TokenStatus;
  // tokenStatus = TokenStatus.Validating;
  token = null;
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      // private accountService: AccountService,
      
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
      });

      const token = this.route.snapshot.queryParams['token'];

      // remove token from url to prevent http referer leakage
      this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

      // this.accountService.validateResetToken(token)
      //     .pipe(first())
      //     .subscribe({
      //         next: () => {
      //             this.token = token;
      //             this.tokenStatus = TokenStatus.Valid;
      //         },
      //         error: () => {
      //             this.tokenStatus = TokenStatus.Invalid;
      //         }
      //     });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      
      this.router.navigate(['../login'], { relativeTo: this.route });
      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      // this.accountService.resetPassword(this.token, this.f.password.value, this.f.confirmPassword.value)
      //     .pipe(first())
      //     .subscribe({
      //         next: () => {
      //             this.alertService.success('Password reset successful, you can now login', { keepAfterRouteChange: true });
      //             this.router.navigate(['../login'], { relativeTo: this.route });
      //         },
      //         error: error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         }
      //     });
  }
}
