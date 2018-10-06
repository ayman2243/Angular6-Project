import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitlesService } from '../../../../services/modules/titles.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  titleData = {name: '',  type: ''};
  titleForm: FormGroup;

  constructor(
              private router: Router, 
              public _title: TitlesService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this.titleForm = new FormGroup({
      'name': new FormControl(this.titleData.name, [Validators.required]),
      'type': new FormControl(this.titleData.type, [Validators.required])
    });

  }

  send(){
    this._title.addTitle(this.titleData, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','titles','list']);
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
