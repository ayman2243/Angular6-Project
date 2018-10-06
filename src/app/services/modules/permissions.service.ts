import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Permission } from '../../models/permission.model';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http: Http) { }
  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/permissions?page=${page}`).pipe(
      map((res: Response) => {
        let permissions = {
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
          permissions.docs.push(new Permission(element))
        });
        return permissions;
      })
    );
  }

  view(id: String): Observable<Permission> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/permission/${id}`).pipe(
      map((res: Response) => new Permission(res.json()))
    );
  }

  add(permission: Permission, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/permission`, permission, options).pipe(
      map((res: Response) => new Permission(res.json()))
    );
  }

  edit(id: string, permission: Permission, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/permission/${id}`, permission, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/permission/${id}`, options);
  }

}
