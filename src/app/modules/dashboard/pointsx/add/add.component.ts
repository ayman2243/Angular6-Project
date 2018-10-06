import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PointsService } from '../../../../services/modules/points.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { Point } from '../../../../models/point.model';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  pointData = {
    pointNumber: null,
    text: null,
    annotation: [],
    documents: [],
    folder_id: null,
    typeOfTafser: null,
    interpreters: [],
    timeline_id: null,
    resources: null,
    aya_id: null,
    surah_id: null,
    pageNumber: null,
    title_id: null
  };
  pointForm: FormGroup;

  constructor(
    private router: Router,
    public _point: PointsService,
    public _errHandler: ErrorHandlerService,
    private toastService: MzToastService,
  ) {
    this.pointForm = new FormGroup({
      // Input[number] required 
      pointNumber: new FormControl(this.pointData.pointNumber, [Validators.required]),
      // Textarea required
      text: new FormControl(this.pointData.text, [Validators.required]),
      // Custom filed
      annotation: new FormControl(this.pointData.annotation),
      // Custom filed
      documents: new FormControl(this.pointData.documents),
      // Custom filed required
      folder_id: new FormControl(this.pointData.folder_id, [Validators.required]),
      // Select options
      typeOfTafser: new FormControl(this.pointData.typeOfTafser, [Validators.required]),
      // Custom filed required
      interpreters: new FormControl(this.pointData.interpreters, [Validators.required]),
      // Custom filed required
      timeline_id: new FormControl(this.pointData.timeline_id, [Validators.required]),
      // Custom filed
      resources: new FormControl(this.pointData.resources),
      // Custom filed
      aya_id: new FormControl(this.pointData.aya_id),
      // Custom filed required
      surah_id: new FormControl(this.pointData.surah_id, [Validators.required]),
      // Input[number] required 
      pageNumber: new FormControl(this.pointData.pageNumber, [Validators.required]),
      // Custom filed
      title_id: new FormControl(this.pointData.title_id)
    });

  }

  send() {
    let pointObject = new Point(this.pointData);
    this._point.addPoint(pointObject, localStorage.getItem('token')).subscribe(
      (done) => {
        this.router.navigate(['dashboard', 'points', 'list']);
      },
      (err) => {
        this.showToast(err);
      }
    );
  }

  showToast(ms, err = true) {
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
      , 4000, 'red');
  }

  ngOnInit() {
  }

}
