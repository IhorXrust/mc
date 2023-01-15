import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggle.component.html',
})
export class FeedToggleComponent implements OnInit {
  @Input('tagName') tagNameProps!: string | null;

  isLoggedIn$!: Observable<boolean | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
