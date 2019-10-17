import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // estoy tipando
  // emailField: FormControl;
  emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  constructor() {

  }
  getErrorMessage() {
    return this.emailField.hasError('required') ? 'You must enter a value' :
        this.emailField.hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit() {
  }

  sendEmail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
