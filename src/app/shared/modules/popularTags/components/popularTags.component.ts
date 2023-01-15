import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { defaultIfEmpty, observable, Observable, of } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { PopularTagsService } from '../services/popularTags.service';
import { getPopularTagsAction } from '../store/actions/getPopularTags.action';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../store/selectors';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  popularTags$!: Observable<PopularTagType[] | null>;
  error$!: Observable<string | null>;
  popularTagsisEmpty$!: Observable<[]>;

  constructor(
    private store: Store,
    private popularTagsservice: PopularTagsService
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }
  initValues(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  initListeners(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }
}
