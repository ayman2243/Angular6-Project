import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineService } from '../../../../services/modules/timeline.service';
import { Timeline } from '../../../../models/timelineExplanation';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-add-timeline',
  templateUrl: './add-timeline.component.html',
  styleUrls: ['./add-timeline.component.scss']
})
export class AddTimelineComponent implements OnInit {

  timelineData = {timelinename: "",date:"", description:""};
  timelineForm: FormGroup;

  constructor(
              private router: Router, 
              public _timeline: TimelineService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this.timelineForm= new FormGroup({
      'timelinename': new FormControl(this.timelineData.timelinename, [Validators.required]),
      'date': new FormControl(this.timelineData.date, [Validators.required]),
      'description': new FormControl(this.timelineData.description, [Validators.required]),
      
      
    });

  }

  send(){
    let timeline = new Timeline(this.timelineData);
    this._timeline.add(timeline, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','timeline','list']);
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
