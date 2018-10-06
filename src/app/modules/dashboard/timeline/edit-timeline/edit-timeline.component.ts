import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimelineService } from '../../../../services/modules/timeline.service';
import { Timeline } from '../../../../models/timelineExplanation';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-edit-timeline',
  templateUrl: './edit-timeline.component.html',
  styleUrls: ['./edit-timeline.component.scss']
})
export class EditTimelineComponent implements OnInit {
  timelineData = {timelinename: "", date:"", description:""};
  timelineForm: FormGroup;
  constructor(
              private router: Router, 
              private route: ActivatedRoute,
              public _timeline: TimelineService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
  ) {
    this._timeline.view(this.route.snapshot.params['id']).subscribe(
      (timeline) =>{
        Object.assign(this.timelineData,timeline);
      },
      (err) =>{ this.showToast(err); 
    });
    this.timelineForm= new FormGroup({
      'timelinename': new FormControl(this.timelineData.timelinename, [Validators.required]),
      'date': new FormControl(this.timelineData.date, [Validators.required]),
      'description': new FormControl(this.timelineData.description, [Validators.required]),
      
      
    });
    }
    edit(){
      let timeline = new Timeline(this.timelineData)
      this._timeline.edit(this.route.snapshot.params['id'],timeline,localStorage.getItem('token')).subscribe(
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
