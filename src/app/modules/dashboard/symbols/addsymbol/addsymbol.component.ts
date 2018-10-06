import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SymbolsService } from '../../../../services/modules/symbols.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsymbol',
  templateUrl: './addsymbol.component.html',
  styleUrls: ['./addsymbol.component.scss']
})
export class AddsymbolComponent implements OnInit {
oldData; 
symbol={refersTo:"", color:"",bookSection:"",symbolType:"",pageNumber:""}
symbolForm:FormGroup
  constructor(private symbolService:SymbolsService, private router:Router) {


this.symbolForm = new FormGroup({ 
  refersTo : new FormControl(this.symbol.refersTo,Validators.required),
  color : new FormControl(this.symbol.color,Validators.required),
  bookSection : new FormControl(this.symbol.bookSection,Validators.required),
  symbolType : new FormControl(this.symbol.symbolType,Validators.required),
  pageNumber : new FormControl(this.symbol.pageNumber,Validators.required)




})

   }

  ngOnInit() {
  }


add(){

  this.symbolService.addSymbol(this.symbol,localStorage.getItem('token')).subscribe((res)=>{
    alert("تمت الاضافة بنجاح")
    this.router.navigate(["dashboard/symbol"])



  },(err)=>{

    alert("فشل في عملية الأضافه , برجاء مراجعة المدخلات")
  console.log(err);
  
  })
}

}
