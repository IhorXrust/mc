import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedToggleComponent } from './components/feedToggle.component';

@NgModule({
  declarations: [FeedToggleComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeedToggleComponent],
})
export class FeedToggleModule {}
