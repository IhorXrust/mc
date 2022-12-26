import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.components';
import { authReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
