import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{errorMessagaProps}}</div>',
})
export class ErrorMessageComponent {
  @Input('errorMessage') errorMessagaProps: string = 'Something went wrong';
}
