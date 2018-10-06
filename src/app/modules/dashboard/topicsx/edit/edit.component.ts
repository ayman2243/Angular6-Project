import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TopicService } from '../../../../services/modules/topic.service';
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

  topicData = {headline: '',  pageNumber: null, body: null};
  topicForm: FormGroup;
  
  constructor(
              private router: Router,
              private route: ActivatedRoute, 
              public _topic: TopicService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this._topic.view(this.route.snapshot.params['id']).subscribe(
      (tp) =>{
        Object.assign(this.topicData, tp);
      },
      (err) =>{ 
        this.showToast(err); 
    });
    this.topicForm = new FormGroup({
      'headline': new FormControl(this.topicData.headline, [Validators.required]),
      'pageNumber': new FormControl(this.topicData.pageNumber, [Validators.required]),
      'body': new FormControl(this.topicData.body, [Validators.required])
    });

  }

  edit(){
    this._topic.edit(this.route.snapshot.params['id'],this.topicData, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','topics','list']);
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
