import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Annotation } from '../../models/Annotation.model';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {

  constructor(private http: Http) { }

  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/annotation?page=${page}`).pipe(
      map((res: Response) => {
        let Annotationarr = {
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
          Annotationarr.docs.push(new Annotation(element))
        });
        return Annotationarr;
      })
    );
  }

  view(id: String): Observable<Annotation> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/annotation/${id}`).pipe(
      map((res: Response) => new Annotation(res.json()))
    );
  }

  add(annotation: Annotation, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/annotation`, annotation, options).pipe(
      map((res: Response) => res.json())
    );

  }

  edit(id: string, Annotation: Annotation, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/annotation/` + id, Annotation, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/annotation/` + id, options);
  }

}
