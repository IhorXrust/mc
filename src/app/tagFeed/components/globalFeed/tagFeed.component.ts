import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string = '';
  tagName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const tag = params.get('slug');
      this.tagName = tag;
      this.apiUrl = `/articles?tag=${tag}`;
      console.log(' TagFeedComponent :>> ', tag);
      console.log(' TagFeedComponent apiUrl:>> ', this.apiUrl);
    });
  }
}
