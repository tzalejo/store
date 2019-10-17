import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder) {
    // cuando hacemos una construccion se lo hace en constructor
    this.buildForms();
  }

  ngOnInit() {

  }
  // email = new FormControl('', [Validators.required, Validators.email]);

  onSubmit(event: Event) {
    console.log(this.loginForm);
  }

  private buildForms() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
}
