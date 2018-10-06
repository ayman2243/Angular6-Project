import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Surah } from '../../models/surah.models';
import { AppConfig } from '../../../config/app.config';



@Injectable({
  providedIn: 'root'
})

export class SowarService {

  constructor(private http: Http) { }

  getAllSowar(page: Number = 1): Observable<any> {
    return this.http.get(AppConfig.settings.apiServer.metadata + '/surah?page=' + page).pipe(
      map((res: Response) => {
        let sowar = {
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
          sowar.docs.push(new Surah(element))
        });
        return sowar;
      })
    );
  }

  deleteSurah(id: string, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(AppConfig.settings.apiServer.metadata + '/surah/' + id, options);
  }

  addSurah(newsurah: Surah, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(AppConfig.settings.apiServer.metadata + '/surah/', newsurah, options);

  }

  getSurah(id) {


    return this.http.get(AppConfig.settings.apiServer.metadata + '/surah/' + id).pipe(
      map((res: Response) => {
        let surah;

        surah = new Surah(res.json())
        return surah;
      }))



  }

  editSurah(id: string, modifiedSurah: Surah, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(AppConfig.settings.apiServer.metadata + '/surah/' + id, modifiedSurah, options);


  }


}


