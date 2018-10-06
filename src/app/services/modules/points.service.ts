import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Point } from '../../models/point.model';
import { AppConfig } from '../../../config/app.config';


@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private http: Http) { }


  getAllPoints(page: Number = 1): Observable<any> {
    return this.http.get(AppConfig.settings.apiServer.metadata + '/point?page=' + page).pipe(
      map((res: Response) => {
        let points = {
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
          points.docs.push(new Point(element))
        });
        return points;
      })
    );
  }

  deletePoint(id: string, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(AppConfig.settings.apiServer.metadata + '/point/' + id, options);
  }

  addPoint(newpoint: Point, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(AppConfig.settings.apiServer.metadata + '/point/', newpoint, options);

  }

  getPoint(id) {

    return this.http.get(AppConfig.settings.apiServer.metadata + '/point/' + id).pipe(
      map((res: Response) => new Point(res.json()))
    );

  }

  editPoint(id: string, modifiedPoint, token: string) {
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.patch(AppConfig.settings.apiServer.metadata + '/point/' + id, modifiedPoint, options);


  }


}
