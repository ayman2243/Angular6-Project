import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Timeline } from '../../models/timelineExplanation';
import { AppConfig } from '../../../config/app.config';
@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: Http) { }

  list(): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/timelines`).pipe(
      map((res: Response) => {
        let timelinearr = {
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
          timelinearr.docs.push(new Timeline(element))
        });
        return timelinearr;
      })
    );
  }
  
  view(id: String): Observable<Timeline> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/timeline/${id}`).pipe(
      map((res: Response) => new Timeline(res.json()))
    );
  }

  add(timeline: Timeline, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/timeline`, timeline, options);
  }

  edit(id: string, timeline: Timeline, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/timeline/` + id, timeline, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/timeline/` + id, options);
  }

}
