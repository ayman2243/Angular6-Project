import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SowarService } from '../../../../services/modules/sowar.service';
import { MzBaseModal } from 'ngx-materialize';

@Component({
  selector: 'app-deletesurah',
  templateUrl: './deletesurah.component.html',
  styleUrls: ['./deletesurah.component.scss']
})
export class DeletesurahComponent extends MzBaseModal implements OnInit {


  name;
  id;
  public modalOptions: Materialize.ModalOptions = {
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '100%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters available.
      //alert('Ready');
      //console.log(modal, trigger);
      $('.modal').css({"height": "120px"})
    },
    complete: () => { 
      
    } // Callback for Modal close
  };

  constructor(
      private router: Router, 
      private route: ActivatedRoute, 
      public _surah: SowarService, 
  ){
    super();
  }

  delete(){
    this._surah.getSurah(this['id']).subscribe(
      (fd) =>{
        this._surah.deleteSurah(this['id'], localStorage.getItem('token')).subscribe(
          (done) => {
            $('.modal-overlay, app-deletesurah').remove();
            this.router.navigateByUrl("/dashboard/surah/list");
          }
        )
    },
    (err) =>{
      $('.modal-overlay, app-deletesurah').remove();
    });
  }

  ngOnInit() {
  }

}
