import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Folder } from '../../models/Folders.model';
import { AppConfig } from '../../../config/app.config';
@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http: Http) { }
  list(page: Number = 1): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/folders?page=${page}`).pipe(
      map((res: Response) => {
        let folderarr = {
          docs: [],
          pagination: {
            total: res.json()['total'],
            limit: res.json()['limit'],
            offset: res.json()['offset'],
            page: res.json()['page'],
            pages: res.json()['pages']
          }
        };;
        res.json()['docs'].forEach(element => {
          folderarr.docs.push(new Folder(element))
        });
        return folderarr;
      })
    );
  }

  listWithoutPagination(): Observable<any> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/folders/noPagination`).pipe(
      map((res: Response) => {
        let folders = [];
        res.json().forEach(element => {
          folders.push(new Folder(element))
        });
        return folders;
      })
    );
  }

  view(id: String): Observable<Folder> {
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/folder/` + id).pipe(
      map((res: Response) => new Folder(res.json()))
    );

  }
  add(folder: Folder, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppConfig.settings.apiServer.metadata}/folder`, folder, options);

  }
  edit(id: string, folder, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(`${AppConfig.settings.apiServer.metadata}/folder/` + id, folder, options);

  }
  delete(id: string, token: string): Observable<any> {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/folder/` + id, options);
  }
}
