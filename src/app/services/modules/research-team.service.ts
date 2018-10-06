import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import {ResearchTeam} from '../../models/ResearchTeam.model'; 
import { AppConfig } from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ResearchTeamService {

  constructor(private http: Http) { }
  list(page: Number = 1):Observable<any>{
    return this.http.get(`${AppConfig.settings.apiServer.metadata}/researchteam?page=${page}`).pipe(
      map( (res: Response) =>{
        let researchteamarr = {
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
        researchteamarr.docs.push(new ResearchTeam(element))
        });
        return researchteamarr;
      })
    );
  }
  view(id: String):Observable<ResearchTeam>{
   return this.http.get(`${AppConfig.settings.apiServer.metadata}/researchteam/${id}`).pipe(
    map( (res: Response) => new ResearchTeam(res.json()))
 );

   }
   add(researchteam:ResearchTeam, token: string):Observable<any>{
    let headers = new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let  options= new RequestOptions({ headers: headers});
    return this.http.post( `${AppConfig.settings.apiServer.metadata}/researchteam`,researchteam,options);
      
   }
   edit(id:string,researchteam:ResearchTeam,token:string):Observable<any>{
     let headers=new Headers;
     headers.append("Content-Type", "application/json");
     headers.append("access-token", `${token}`);
     let  options= new RequestOptions({ headers: headers});
     return this.http.patch(`${AppConfig.settings.apiServer.metadata}/researchteam/`+id,researchteam,options);

   }
   delete(id:string,token:string):Observable<any>{
    let headers=new Headers;
    headers.append("Content-Type", "application/json");
    headers.append("access-token", `${token}`);
    let  options= new RequestOptions({ headers: headers});
    return this.http.delete(`${AppConfig.settings.apiServer.metadata}/researchteam/`+id,options);
   }

}
