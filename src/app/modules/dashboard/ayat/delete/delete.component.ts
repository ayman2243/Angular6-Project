import { Component, OnInit } from '@angular/core';
import { MzBaseModal } from 'ngx-materialize';
import { Router, ActivatedRoute } from '@angular/router';
import { AyatService } from '../../../../services/modules/ayat.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  
})
export class DeleteComponent extends MzBaseModal implements OnInit {

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
      public _ayaService: AyatService, 
  ){
    super();
  }

  delete(){
    this._ayaService.getAya(this['id']).subscribe(
      (aya) =>{
        this._ayaService.deleteAya(this['id'], localStorage.getItem('token')).subscribe(
          (done) => {
            $('.modal-overlay, app-delete').remove();
            this.router.navigate(['dashboard','aya','list']);
          }
        )
    },
    (err) =>{
      $('.modal-overlay, app-delete').remove();
    });
  }

  ngOnInit(){
  }


}
