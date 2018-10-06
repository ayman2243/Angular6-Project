import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable, observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Topics } from '../../models/topics.model';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: Http) { }
  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/topics?page=${page}`).pipe(
      map((res: Response) => {
        let topicarr = {
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
          topicarr.docs.push(new Topics(element))
        });
        return topicarr;
      })
    );
  }

  view(id: String): Observable<Topics> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/topic/${id}`).pipe(
      map((res: Response) => new Topics(res.json(), true))
    );

  }
  
  add(topic: Topics, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/topic`, topic, options);

  }
  
  edit(id: string, topic, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/topic/` + id, topic, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/topic/${id}`, options);
  }

}
