import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AyatService } from '../../../../services/modules/ayat.service';
import { Router } from '@angular/router';
import { SowarService } from '../../../../services/modules/sowar.service';
import { Aya } from '../../../../models/aya.models';

@Component({
  selector: 'app-ayat-add',
  templateUrl: './ayat-add.component.html',
  styleUrls: ['./ayat-add.component.scss']
})
export class AyatAddComponent implements OnInit {
sowar;
aya = {text:"" , surah_id:"" , surahName:""};
ayaForm:FormGroup;

  constructor(
              private ayaService:AyatService, 
              private router:Router,
              private sowarService:SowarService) { 
  this.getAllSowar()
  }

  ngOnInit() {
    this.ayaForm = new FormGroup({
      text: new FormControl(this.aya.text, Validators.required),
      surah_id:new FormControl(this.aya.surah_id,Validators.required) ,
      surahName:new FormControl(this.aya.surahName,) ,
    });
  }


addAya(){
  this.ayaService.newAya(new Aya(this.aya),localStorage.getItem('token')).subscribe((res)=>{
    this.router.navigate(["dashboard/aya"])
  },(err)=>{  
    alert("فشل في عملية الأضافه , برجاء مراجعة المدخلات")
  });
}

getAllSowar(){
  this.sowarService.getAllSowar().subscribe((res)=>{
   this.sowar = res 
  })
}

setName(id){
  this.sowarService.getSurah(id).subscribe((res)=>{
  this.aya.surahName = res.surahName 
  },(err)=>{

  });
}

}
