import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../../../config/app.config';
import { User } from "../../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  Login(email: string, password: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers});
    return this.http.post(
      `${AppConfig.settings.apiServer.metadata}/auth/login`, 
      {email, password}, 
      options).pipe(
        map((res: Response) =>{
          return { user: new User(res.json().user), token: res.json().token }
        })
      );
  }

  async isAuthenticated(){
    // check User
    if(!localStorage.getItem('token'))
      throw false;
    var user = await this.Me(localStorage.getItem('token')).toPromise();
    if(user)
      return true;
    throw false;
  }


  Me(token: string) : Observable<any>{
    let headers = new Headers;
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers});
    return this.http.get(
      `${AppConfig.settings.apiServer.metadata}/auth/me`,  
      options).pipe(
        map((res: Response) =>{
          return { user: new User(res.json()), token }
        })
      );
  }

  Logout(token: string) : Observable<any>{
    let headers = new Headers;
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers});
    return this.http.delete(
      `${AppConfig.settings.apiServer.metadata}/auth/logout`,  
      options).pipe(
        map((res) => res.json())
      );
  }



}
