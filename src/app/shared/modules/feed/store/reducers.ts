import { routerNavigationAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action';

const initState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initState,
  on(getFeedAction, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(getFeedSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),

  on(getFeedFailureAction, (state) => ({
    ...state,
    isLoading: false,
  })),

  on(routerNavigationAction, (): FeedStateInterface => initState)
);
