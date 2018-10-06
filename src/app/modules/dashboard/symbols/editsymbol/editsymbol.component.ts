import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SymbolsService } from '../../../../services/modules/symbols.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editsymbol',
  templateUrl: './editsymbol.component.html',
  styleUrls: ['./editsymbol.component.scss']
})
export class EditsymbolComponent implements OnInit {
oldData;
symbol = {refersTo:"",color:"",bookSection:"",symbolType:"",pageNumber:""}
Colors= [{eng:"Green" , arb:"اخضر"},{eng:"Red" , arb:"احمر"}]
SymbolTypes =  [{eng:"Header" , arb:"جسد النص"},{eng:"Footer" , arb:"تذييل النص"}]
symbolForm:FormGroup


  constructor(private symbolService:SymbolsService , private route:ActivatedRoute , private router:Router) {

this.getSymbol()

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


  getSymbol(){

    this.symbolService.getSymbol(this.route.snapshot.params['id']).subscribe((res)=>{
      this.symbol = res 
      this.oldData = res 



    })
  }

submit(){

  
  this.symbolService.editSymbol(this.route.snapshot.params['id'],this.symbol,localStorage.getItem('token')).subscribe((res)=>{

    alert("تم حفظ التغييرات بنجاح")
    this.router.navigate(["dashboard/point"])
  },(err)=>{alert("فشل في عملية الحفظ , برجاء التأكد من صحة المدخلات الجديدة")})


}

cancel(){

  this.router.navigate(["dashboard/symbol/"])
}


}
