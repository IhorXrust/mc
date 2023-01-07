import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';

export const featureKey = 'feed';

export const feedFeatureSelector =
  createFeatureSelector<FeedStateInterface>(featureKey);

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
