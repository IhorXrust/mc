import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Params,
  Route,
  Router,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import queryString from 'query-string';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('apiUrl') apiUrlProps!: string;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  feed$!: Observable<GetFeedResponseInterface | null>;

  limit = environment.limit;
  baseUrl!: string;
  currentPage!: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges :>> ', changes);

    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue;
    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }
  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));

    this.baseUrl = this.router.url.split('?')[0];
  }

  initListeners(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.currentPage = Number(params.get('page') || 1);
      console.log('this.currentPage :>> ', this.currentPage);
      console.log('this.apiUrlProps :>> ', this.apiUrlProps);
      this.fetchFeed();
    });
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifyedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });

    const apiUrlWithParams = `${parsedUrl.url}?${stringifyedParams}`;
    console.log(' :parsedUrl>> ', parsedUrl);

    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}
