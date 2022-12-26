import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(ActionTypes.LOGIN_SUCCESS);
export const loginFailure = createAction(ActionTypes.LOGIN_FAILURE);
