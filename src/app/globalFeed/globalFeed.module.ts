import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../shared/modules/baner/baner.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedToggleModule } from '../shared/modules/feedToggle/feedToggle.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
