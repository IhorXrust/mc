import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../shared/modules/baner/baner.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { FeedToggleModule } from '../shared/modules/feedToggle/feedToggle.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { TagFeedComponent } from './components/globalFeed/tagFeed.component';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
