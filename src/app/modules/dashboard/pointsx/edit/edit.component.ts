import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PointsService } from '../../../../services/modules/points.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Point } from '../../../../models/point.model';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  pointData = {text: '',  pageNumber: null};
  pointForm: FormGroup;

  constructor(
              private router: Router,
              private route: ActivatedRoute, 
              public _point: PointsService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this._point.getPoint(this.route.snapshot.params['id']).subscribe(
      (po) =>{
        Object.assign(this.pointData, po);
      },
      (err) =>{ 
        this.showToast(err); 
    });
    this.pointForm = new FormGroup({
      'text': new FormControl(this.pointData.text, [Validators.required]),
      'pageNumber': new FormControl(this.pointData.pageNumber, [Validators.required])
    });

  }

  edit(){
    let pointObject = new Point(this.pointData);
    this._point.editPoint(this.route.snapshot.params['id'],pointObject, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','points','list']);
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
