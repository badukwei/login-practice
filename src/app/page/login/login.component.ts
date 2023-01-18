import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        // email
        email: this.fb.control('', {
          validators: [Validators.required],
        }),
        // account
        account: this.fb.control('', {
          validators: [Validators.required],
        }),
        // password
        password: this.fb.control('', {
          validators: [Validators.required],
        })
      },
      {
        // 偵測變更時機
        updateOn: 'submit',
      }
    )
  }

  login() {
    if (this.form.invalid) return;
    console.log(this.form)
  }
}
