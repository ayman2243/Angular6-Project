import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzBaseModal } from 'ngx-materialize';
import { ResourcesService } from '../../../../services/modules/resources.service';

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.scss']
})
export class DeleteResourceComponent extends MzBaseModal implements OnInit {

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
      public _resource: ResourcesService, 
  ){
    super();
  }

  delete(){
    this._resource.view(this['id']).subscribe(
      (fd) =>{
        this._resource.delete(this['id'], localStorage.getItem('token')).subscribe(
          (done) => {
            $('.modal-overlay, app-delete').remove();
            this.router.navigate(['dashboard','resource','list','#done']);
          }
        )
    },
    (err) =>{
      $('.modal-overlay, app-delete-resource').remove();
    });
  }

  ngOnInit(){
  }

  


}
