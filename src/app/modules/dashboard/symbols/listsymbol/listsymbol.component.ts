import { Component, OnInit } from '@angular/core';
import { SymbolsService } from '../../../../services/modules/symbols.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listsymbol',
  templateUrl: './listsymbol.component.html',
  styleUrls: ['./listsymbol.component.scss']
})
export class ListsymbolComponent implements OnInit {
symbols;
  constructor(private symbolService:SymbolsService, private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {
    this.getAllSymbols();
  }


getAllSymbols(){


this.symbolService.getAllSymbols().subscribe((res)=>{

console.log(res);

  
this.symbols = res
console.log(this.symbols);


})


}

delete(id){
      var result = confirm("هل تريد اتمام عمليه الالغاء ؟ ")
  if(result){  

this.symbolService.deleteSymbol(id,localStorage.getItem('token')).subscribe((res)=>{


  this.getAllSymbols();
})

    }
  }




  view(id){

    this.router.navigate([`dashboard/symbol/view/${id}`])
  }
  
  edit(id){
  
    this.router.navigate([`dashboard/symbol/edit/${id}`])
  }
  
  add(){
  
    this.router.navigate([`dashboard/symbol/add/`])
  }
  

}
