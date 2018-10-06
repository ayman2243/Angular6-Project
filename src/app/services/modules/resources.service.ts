import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Resources } from '../../models/Resources.model';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: Http) { }
  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/resources?page=${page}`).pipe(
      map((res: Response) => {
        let resourcearr = {
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
          resourcearr.docs.push(new Resources(element))
        });
        return resourcearr;
      })
    );
  }

  view(id: String): Observable<Resources> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/resource/${id}`).pipe(
      map((res: Response) => new Resources(res.json()))
    );
  }

  add(resource: Resources, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/resource`, resource, options);
  }

  edit(id: string, resource: Resources, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/resource/` + id, resource, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/resource/` + id, options);
  }

}
