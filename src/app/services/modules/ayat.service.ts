import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Aya } from '../../models/aya.models';
import { AppConfig } from '../../../config/app.config';


@Injectable({
  providedIn: 'root'
})
export class AyatService {

  constructor(private http: Http) { }


  getAllAyat(page: Number = 1): Observable<any> {
    return this.http.get(AppConfig.settings.apiServer.metadata + `/aya?page=${page}`).pipe(
      map((res: Response) => {
        let aya = {
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
          aya.docs.push(new Aya(element))
        });
        return aya;
      })
    );
  }

  deleteAya(id: string, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(AppConfig.settings.apiServer.metadata + '/aya/' + id, options);
  }

  newAya(newAya: Aya, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(AppConfig.settings.apiServer.metadata + '/aya/', newAya, options);

  }

  getAya(id) {
    return this.http.get(AppConfig.settings.apiServer.metadata + '/aya/' + id).pipe(map((res: Response) => {
      let aya;
      aya = new Aya(res.json())
      return aya
    }))

  }

  editAya(id: string, modifiedAya, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(AppConfig.settings.apiServer.metadata + '/aya/' + id, modifiedAya, options);
  }


}


