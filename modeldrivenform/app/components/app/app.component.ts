import { Component } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Model Driven Form Example</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control" formControlName="username">
            <div *ngIf="form.controls.username.errors?.required" class="alert alert-danger">Username is required</div>
            <div *ngIf="form.controls.username.errors?.minlength" class="alert alert-danger">Username needs to be atleast 3 characters long</div>
        </div>
        <div class="form-group">
            <label>Email:</label>
            <input type="text" class="form-control" formControlName="email">
            <div *ngIf="form.controls.email.errors?.required" class="alert alert-danger">Email is required</div>
            <div *ngIf="form.controls.email.errors?.pattern" class="alert alert-danger">Email is not of correct format</div>
        </div>
        <p>
        <button class="btn btn-default" [disabled]="!form.valid" type="submit">Submit</button>
        </p>
    </form>
  </div>
  `,
  styles: [`
    .ng-valid[required]{
      border: 1px solid #42A948; /* green */
    }
    .ng-invalid{
      border: 1px solid #a94442; /* red */
    }
  `]
})
export class AppComponent  {
  form: FormGroup;
  username: FormControl;
  email: FormControl;
  constructor(private fb: FormBuilder) {
    this.username = new FormControl("psachdev", Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ]));
    this.email = new FormControl("puneet.sachdev@gmail.com", Validators.compose([
      Validators.required,
      Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)
    ]));
    this.form = fb.group({
        "username": this.username,
        "email":this.email
    });
  }
  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }
}
