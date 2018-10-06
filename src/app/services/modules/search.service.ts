import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AppConfig } from '../../../config/app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { }

  search(field,string,page: Number = 1){
    let encoded = encodeURI(string);
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/search/${encoded}/${field}?page=${page}`)
    .pipe(
      map( (res: Response) =>{
        let searchItems = {
          docs: [], 
          pagination:{
              total: res.json()['total'],
              limit: res.json()['limit'],
              offset: res.json()['offset'],
              page: res.json()['page'],
              pages:res.json()['pages']
            }
        };
        res.json()['docs'].forEach(element => {
          searchItems.docs.push(element)
        });
        return searchItems;
      })
   );
  }
}
