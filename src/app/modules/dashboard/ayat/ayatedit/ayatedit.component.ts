import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SowarService } from '../../../../services/modules/sowar.service';
import { AyatService } from '../../../../services/modules/ayat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Aya } from '../../../../models/aya.models';

@Component({
  selector: 'app-ayatedit',
  templateUrl: './ayatedit.component.html',
  styleUrls: ['./ayatedit.component.scss']
})
export class AyateditComponent implements OnInit {
  sowar;
  oldData:any;
  ayaData = {text:"" , surah_id:"",surahName:""};
  ayaForm : FormGroup;

  constructor(  private sowarService:SowarService, 
                private ayaService:AyatService, 
                private router:Router, 
                private route:ActivatedRoute) { 

    this.getAya(this.route.snapshot.params['id'])
    this.getAllSowar();
    
    this.ayaForm = new FormGroup({
      text:new FormControl(this.ayaData.text,Validators.required),
      surah_id:new FormControl(this.ayaData.surah_id,Validators.required)
    });

  }

  ngOnInit() {
  }

  getAllSowar(){
    this.sowarService.getAllSowar().subscribe((res)=>{
      this.sowar = res
    });
  }

  getAya(id){
    this.ayaService.getAya(id).subscribe((res)=>{
      this.ayaData = res
    });
  }

  editAya(){

  this.ayaService.editAya(this.route.snapshot.params["id"],this.ayaData,localStorage.getItem("token"))    
    .subscribe((res)=>{
      this.router.navigate(["dashboard/aya"])
    }, (err)=>{alert("فشل في عملية الحفظ , برجاء التأكد من صحة المدخلات الجديدة")})
  }

  cancel(){
    this.router.navigate(['dashboard/aya'])
  }

  setName(id){
    this.sowarService.getSurah(id).subscribe((res)=>{
    this.ayaData.surahName = res.surahName 
    },(err)=>{
    });
    
  }

}
