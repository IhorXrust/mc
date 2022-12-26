import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const featureKey = 'auth';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(featureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
