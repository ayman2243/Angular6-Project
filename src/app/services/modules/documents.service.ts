import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { DocumentationExplanation } from '../../models/documentationExplanation.model'; 
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: Http) { }
  list(page: Number = 1):Observable<any>{
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/DocumentationExplanation?page=${page}`).pipe(
      map( (res: Response) =>{
        let docs = {
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
          docs.docs.push(new DocumentationExplanation(element))
        });
        return docs;
      })
    );
  }
  view(id: String):Observable<DocumentationExplanation>{
   return this.http.get(`${AppConfig.settings.apiServer.metadata}/DocumentationExplanation/${id}`).pipe(
    map( (res: Response) => new DocumentationExplanation(res.json()))
 );

   }
   add(doc: DocumentationExplanation, token: string):Observable<any>{
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let  options= new RequestOptions({ headers: headers});
    return this.http.post( `${AppConfig.settings.apiServer.metadata}/DocumentationExplanation`,doc,options);
      
   }
   edit(id:string,doc,token:string):Observable<any>{
     let headers=new Headers;
     headers.append("Content-Type", "application/json");
     headers.append("access-token", `${token}`);
     let  options= new RequestOptions({ headers: headers});
     return this.http.patch(`${AppConfig.settings.apiServer.metadata}/DocumentationExplanation/${id}`,doc,options);

   }
   delete(id:string,token:string):Observable<any>{
    let headers=new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let  options= new RequestOptions({ headers: headers});
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/DocumentationExplanation/${id}`,options);
   }
}
