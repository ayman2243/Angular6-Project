import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Symbol } from '../../models/symbol.model';
import { AppConfig } from '../../../config/app.config';



@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  constructor(private http:Http) { }
  
  getAllSymbols(page: Number = 1): Observable<any>{
    return this.http.get(AppConfig.settings.apiServer.metadata+'/symbol?page='+page).pipe(
      map( (res: Response) =>{ 
       let symbol = {
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
         symbol.docs.push(new Symbol(element))
       });
       return symbol;
      })
    );
  }

deleteSymbol(id: string, token: string){
  let headers = new Headers;
  headers.append("Content-Type", "application/json");
  headers.append("access-token", `${token}`);
  let options = new RequestOptions({ headers: headers});
  return this.http.delete(AppConfig.settings.apiServer.metadata+'/symbol/'+id, options);
}

addSymbol(newsymbol,token: string){
  let headers = new Headers;
  headers.append("Content-Type", "application/json");
  headers.append("access-token", `${token}`);
  let options = new RequestOptions({ headers: headers});
  return this.http.post(AppConfig.settings.apiServer.metadata+'/symbol/',newsymbol, options);

}

getSymbol(id){

  
  return this.http.get(AppConfig.settings.apiServer.metadata+'/symbol/'+ id).pipe(map((res)=>{

let symbol; 
symbol = res.json();
return symbol


  }))

}

editSymbol(id:string , modifiedSymbol,token: string){
  let headers = new Headers;
  headers.append("Content-Type", "application/json");
  headers.append("access-token", `${token}`);
  let options = new RequestOptions({ headers: headers});
  return this.http.patch(AppConfig.settings.apiServer.metadata+'/symbol/'+id, modifiedSymbol, options);


}


}
