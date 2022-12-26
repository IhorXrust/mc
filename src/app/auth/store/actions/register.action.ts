import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);

export const registerSuccess = createAction(ActionTypes.REGISTER_SUCCESS);
export const registerFailure = createAction(ActionTypes.REGISTER_FAILURE);
