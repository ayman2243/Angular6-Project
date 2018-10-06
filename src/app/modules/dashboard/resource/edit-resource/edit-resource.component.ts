import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResourcesService } from '../../../../services/modules/resources.service';
import { Resources } from '../../../../models/Resources.model';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.scss']
})
export class EditResourceComponent implements OnInit {
  resourceData = { name: "",information:""};
  resourceForm: FormGroup;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public _resource: ResourcesService, 
    public _errHandler: ErrorHandlerService,
    private toastService: MzToastService
  ) {
    this._resource.view(this.route.snapshot.params['id']).subscribe(
      (resource) =>{
        Object.assign(this.resourceData, resource);
      },
      (err) =>{ this.showToast(err); 
    });

    this.resourceForm = new FormGroup({
      'name': new FormControl(this.resourceData.name, [Validators.required]),
      'information': new FormControl(this.resourceData.information, [Validators.required])
    });
  }

  edit(){
    let resource = new Resources(this.resourceData)
    this._resource.edit(this.route.snapshot.params['id'],resource, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','resource','list']);
      },
      (err) => {
        this.showToast(err);
      }
    )
  }

  showToast(ms, err = true){
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
    , 4000, 'red');
  }

  ngOnInit() {
  }

}
