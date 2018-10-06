import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from '../../../../services/modules/documents.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { DocumentationExplanation } from '../../../../models/documentationExplanation.model';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  documentData = { name: '', description: ''};
  documentForm: FormGroup;

  constructor(
              private router: Router, 
              public _document: DocumentsService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this.documentForm = new FormGroup({
      'name': new FormControl(this.documentData.name, [Validators.required]),
      'description': new FormControl(this.documentData.description, [Validators.required])
    });

  }

  send(){
    this._document.add(new DocumentationExplanation(this.documentData), localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','documents','list']);
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
