import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistanceService } from './persistance.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {
  constructor(private persistanceService: PersistanceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.persistanceService.get('accessToken');
    req = req.clone({
      setHeaders: {
        Authorization: accessToken ? `Token ${accessToken} ` : '',
      },
    });

    return next.handle(req);
  }
}
