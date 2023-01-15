import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponsePopularTagsInterface } from '../types/responsePopularTags.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { map } from 'rxjs';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get<ResponsePopularTagsInterface>(url)
      .pipe(map((res) => res['tags']));
  }
}
