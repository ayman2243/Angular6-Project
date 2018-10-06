import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from '../../../../services/modules/documents.service';
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

  documentData = { name: '', description: ''};
  documentForm: FormGroup;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public _document: DocumentsService, 
    public _errHandler: ErrorHandlerService,
    private toastService: MzToastService
  ) {
    this._document.view(this.route.snapshot.params['id']).subscribe(
      (doc) =>{
        Object.assign(this.documentData, doc);
      },
      (err) =>{ this.showToast(err); 
    });

    this.documentForm = new FormGroup({
      'name': new FormControl(this.documentData.name, [Validators.required]),
      'description': new FormControl(this.documentData.description, [Validators.required])
    });
  }

  edit(){
    this._document.edit(this.route.snapshot.params['id'],this.documentData, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['/dashboard/documents/list']);
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
