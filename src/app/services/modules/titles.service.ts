import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title } from '../../models/title.model';
import { AppConfig } from '../../../config/app.config';


@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  constructor(private http: Http) { }

  getAllTitles(page: Number = 1): Observable<any> {
    return this.http.get(AppConfig.settings.apiServer.metadata + '/titles?page=' + page).pipe(
      map((res: Response) => {
        let titles = {
          docs: [],
          pagination: {
            total: res.json()['total'],
            limit: res.json()['limit'],
            offset: res.json()['offset'],
            page: res.json()['page'],
            pages: res.json()['pages']
          }
        };
        res.json()['docs'].forEach(element => {
          titles.docs.push(new Title(element))
        });
        return titles;
      })
    );
  }

  deleteTitle(id: string, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(AppConfig.settings.apiServer.metadata + '/title/' + id, options);
  }

  addTitle(newTitle, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(AppConfig.settings.apiServer.metadata + '/title/', newTitle, options);
  }

  getTitle(id) {
    return this.http.get(AppConfig.settings.apiServer.metadata + '/title/' + id).pipe(
      map((res: Response) => new Title(res.json()))
    );
  }

  editTitle(id: string, modifiedTitle, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(AppConfig.settings.apiServer.metadata + '/title/' + id, modifiedTitle, options);
  }


}
