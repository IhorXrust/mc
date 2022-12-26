import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';

const initState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggeIn: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),

  on(registerSuccessAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser,
    isLoggeIn: true,
  })),

  on(registerFailureAction, (state, action) => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors,
  }))
);
