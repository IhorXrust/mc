import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendErrorsMsgComponent } from './component/backendErrorsMsg.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorsMsgComponent],
  exports: [BackendErrorsMsgComponent],
})
export class BackendErrorsMsgModule {}
