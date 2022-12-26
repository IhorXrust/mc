import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  onSubmit() {
    console.log('login form value :>> ', this.form.value);
  }
}
