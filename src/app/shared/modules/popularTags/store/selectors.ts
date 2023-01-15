import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';

export const featureKey = 'popularTags';

export const feedFeatureSelector =
  createFeatureSelector<PopularTagsStateInterface>(featureKey);

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
);

export const popularTagsSelector = createSelector(
  feedFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.tags
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
);
