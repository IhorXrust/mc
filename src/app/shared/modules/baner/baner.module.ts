import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BanerComponent } from './components/baner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BanerComponent],
  exports: [BanerComponent],
})
export class BannerModule {}
