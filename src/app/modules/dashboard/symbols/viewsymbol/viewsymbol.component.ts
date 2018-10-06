import { Component, OnInit } from '@angular/core';
import { SymbolsService } from '../../../../services/modules/symbols.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewsymbol',
  templateUrl: './viewsymbol.component.html',
  styleUrls: ['./viewsymbol.component.scss']
})
export class ViewsymbolComponent implements OnInit {
symbol;
  constructor(private symbolService:SymbolsService , private route:ActivatedRoute) {
this.getSymbol();

   }

  ngOnInit() {
  }


getSymbol(){


this.symbolService.getSymbol(this.route.snapshot.params['id']).subscribe((res)=>{

this.symbol = res

console.log(res);


})

}

}
