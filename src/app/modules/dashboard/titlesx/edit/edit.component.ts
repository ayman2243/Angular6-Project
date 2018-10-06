import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitlesService } from '../../../../services/modules/titles.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  titleData = {name: '',  type: ''};
  titleForm: FormGroup;


  constructor(
              private router: Router,
              private route: ActivatedRoute, 
              public _title: TitlesService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this._title.getTitle(this.route.snapshot.params['id']).subscribe(
      (tl) =>{
        Object.assign(this.titleData, tl);
      },
      (err) =>{ 
        this.showToast(err); 
    });

    this.titleForm = new FormGroup({
      'name': new FormControl(this.titleData.name, [Validators.required]),
      'type': new FormControl(this.titleData.type, [Validators.required])
    });

  }

  edit(){
    this._title.editTitle(this.route.snapshot.params['id'],this.titleData, localStorage.getItem('token')).subscribe(
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
