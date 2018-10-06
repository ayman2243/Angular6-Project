import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Role } from '../../models/role.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: Http) { }

  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/roles?page=${page}`).pipe(
      map((res: Response) => {
        let roles = {
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
          roles.docs.push(new Role(element))
        });
        return roles;
      })
    );
  }

  view(id: String): Observable<Role> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/role/${id}`).pipe(
      map((res: Response) => new Role(res.json()))
    );
  }

  add(role: Role, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/role`, role, options).pipe(
      map((res: Response) => new Role(res.json()))
    );
  }

  edit(id: string, role: Role, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/role/` + id, role, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/role/` + id, options);
  }

}
