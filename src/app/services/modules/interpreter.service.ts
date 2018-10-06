import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Interpreter } from '../../models/interpreters.model';
import { AppConfig } from '../../../config/app.config';


@Injectable({
  providedIn: 'root'
})
export class InterpreterService {

  constructor(private http: Http) { }

  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/interpreters?page=${page}`).pipe(
      map((res: Response) => {
        let interpreterarr = {
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
          interpreterarr.docs.push(new Interpreter(element))
        });
        return interpreterarr;
      })
    );
  }
  
  view(id: String): Observable<Interpreter> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/interpreter/${id}`).pipe(
      map((res: Response) => new Interpreter(res.json()))
    );
  }

  add(interpreter: Interpreter, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/interpreter`, interpreter, options);
  }

  edit(id: string, interpreter: Interpreter, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/interpreter/` + id, interpreter, options);
  }

  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/interpreter/` + id, options);
  }

}

