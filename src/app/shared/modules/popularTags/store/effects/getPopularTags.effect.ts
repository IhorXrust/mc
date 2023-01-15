import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { PopularTagsService } from '../../services/popularTags.service';
import { ResponsePopularTagsInterface } from '../../types/responsePopularTags.interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTagsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),
          catchError((error: string) => {
            return of(getPopularTagsFailureAction({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
