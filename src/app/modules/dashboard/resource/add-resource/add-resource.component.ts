import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResourcesService } from '../../../../services/modules/resources.service';
import { Resources } from '../../../../models/Resources.model';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";


@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  resourceData = {name: "",information:""};
  resourceForm: FormGroup;

  constructor(
              private router: Router, 
              public _resource: ResourcesService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this.resourceForm = new FormGroup({
      'name': new FormControl(this.resourceData.name, [Validators.required]),
      'information': new FormControl(this.resourceData.information, [Validators.required])
    });

  }

  send(){
    let resource = new Resources(this.resourceData);
    this._resource.add(resource, localStorage.getItem('token')).subscribe(
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
