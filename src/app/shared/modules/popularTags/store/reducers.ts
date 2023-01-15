import { act } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularTags.action';

const initState: PopularTagsStateInterface = {
  isLoading: false,
  error: null,
  tags: null,
};

export const popularTagsReducer = createReducer(
  initState,
  on(getPopularTagsAction, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(getPopularTagsSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    tags: action.popularTags,
  })),

  on(getPopularTagsFailureAction, (state, action) => ({
    ...state,
    tags: null,
    error: action.error,
  }))
);
