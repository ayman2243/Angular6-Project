import { Pipe, PipeTransform } from '@angular/core';
import { SearchService } from '../services/modules/search.service';

@Pipe({
  name: 'searchDocuments'
})
export class SearchDocumentsPipe implements PipeTransform {

  searchResult;
  constructor(private _search: SearchService){}

  async transform(value: any, arg1:any, arg2:any, arg3:any) {
    if(arg1){

      this.searchResult = await this._search.search('document',arg1, arg2).toPromise();
      console.log(this.searchResult);
      return this.searchResult['docs'];
    }
    return value;
  }

}
