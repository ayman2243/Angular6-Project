import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model'; 
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  list(page: Number = 1, token): Observable<any> {
    let headers = new Headers;
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/users/all?page=${page}`, options).pipe(
      map((res: Response) => {
        let users = {
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
          users.docs.push(new User(element))
        });
        return users;
      })
    );
  }

  view(id: String, token): Observable<User> {
    let headers = new Headers;
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/user/${id}`, options).pipe(
      map((res: Response) => new User(res.json()))
    );
  }

  add(user, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/user`, user, options);
  }

  edit(id: string, user, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/user/${id}`, user, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/user/${id}`, options);
  }
}
