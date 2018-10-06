import { Component, OnInit } from '@angular/core';
import { SowarService } from '../../../../services/modules/sowar.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Surah } from "../../../../models/surah.models";
import { MzModalService } from 'ngx-materialize';
import { DeletesurahComponent } from '../deletesurah/deletesurah.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public surah;

  constructor(private modalService: MzModalService, private sowarServices:SowarService,private route: ActivatedRoute) { 
    this.viewSurah(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    
  }
 
viewSurah(id){
  this.sowarServices.getSurah(id).subscribe( (res) => {
    
    this.surah = res;
    
    
  }) , (err) => console.log(err);
  
}


delete(id, name){
  this.modalService.open(DeletesurahComponent, {id, name});
}


  
}

