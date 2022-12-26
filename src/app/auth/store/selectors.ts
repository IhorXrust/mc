import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';

export const featureKey = 'auth';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(featureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
