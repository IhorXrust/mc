import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting$!: Observable<boolean>;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: [''],
      password: [''],
    });
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    console.log('register form value :>> ', this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
