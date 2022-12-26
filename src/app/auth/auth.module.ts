import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.components';
import { authReducer } from './store/reducers';
import { AuthServise } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthServise],
})
export class AuthModule {}
