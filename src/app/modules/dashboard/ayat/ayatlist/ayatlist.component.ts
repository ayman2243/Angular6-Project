import { Component, OnInit } from '@angular/core';
import {AyatService} from '../../../../services/modules/ayat.service';
import { SowarService } from '../../../../services/modules/sowar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './ayatlist.component.html',
  styleUrls: ['./ayatlist.component.scss']
})
export class AyaListComponent implements OnInit {
  ayaList;
  
  viewStyle = (!localStorage.getItem('ayaViewStyle'))? 'table' : 
              localStorage.getItem('ayaViewStyle');
  constructor( private ayatServices:AyatService , 
                private sowarServices:SowarService, 
                private router:Router,
                private route: ActivatedRoute) { 
                  
    this.router.onSameUrlNavigation = "reload";
    this.route.url.subscribe((data) => {
      this.getAllAyat(Number(this.route.snapshot.params['page']) || 1);
    }); 
  }

  ngOnInit() {
    this.getAllAyat(Number(this.route.snapshot.params['page']) || 1);
  }


  getAllAyat(page: Number = 1){
    this.ayatServices.getAllAyat(page).subscribe(
      (res) => { this.ayaList = res; },
      (err) => console.log(err));
  }

  view(id){
    this.router.navigate([`./dashboard/aya/view/${id}`]);
  }

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/aya/list/${pageNumber}`]);
  }
  
  delete(id){
    var result = confirm("هل تريد اتمام عمليه الالغاء ؟ ");
    if (result){
      this.ayatServices.deleteAya(id, localStorage.getItem('token')).subscribe((res)=>{  
        this.getAllAyat(Number(this.route.snapshot.params['page']) || 1);
      },(err)=>{console.log(err);
      });
    }
  }

  viewAya(id){
    this.ayatServices.getAya(id).subscribe((res)=>{
      this.router.navigate([`dashboard/aya/view/${id}`])   
    });
  }

  viewSurah(id){
    this.sowarServices.getSurah(id).subscribe((res)=>{
      this.router.navigate([`dashboard/surah/view/${id}`])   
    });
   }


   add(){
     this.router.navigate(['dashboard/aya/add']);
   }

   edit(id){
    this.router.navigate([`dashboard/aya/edit/${id}`]);
   }


   changeView(vStyle){
    localStorage.setItem('ayaViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('ayaViewStyle');
  }
}
