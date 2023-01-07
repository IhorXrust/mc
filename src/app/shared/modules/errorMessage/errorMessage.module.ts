import { CommonModule } from '@angular/common';
import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ErrorMessageComponent } from './components/errorMessage.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
  imports: [CommonModule],
})
export class ErrorMessageModule {}
