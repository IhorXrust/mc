import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors-msg',
  templateUrl: './backendErrorsMsg.component.html',
  styleUrls: ['./backendErrorsMsg.component.scss'],
})
export class BackendErrorsMsgComponent implements OnInit {
  constructor() {}

  @Input('backendErrors')
  backendErrorsProps!: BackendErrorsInterface;
  errorMessages: string[] = [];

  ngOnInit(): void {
    Object.entries(this.backendErrorsProps).forEach(([key, value]) => {
      this.errorMessages.push(key + ' ' + value);
    });
  }
}
