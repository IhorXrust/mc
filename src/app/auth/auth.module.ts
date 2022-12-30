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
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effests/register.effect';
import { BackendErrorsMsgModule } from '../shared/modules/backendErrorsMsg/backendErrorsMsg.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { LoginEffect } from './store/effests/login.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorsMsgModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthServise, PersistanceService],
})
export class AuthModule {}
