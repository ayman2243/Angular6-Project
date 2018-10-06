import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FolderService } from '../../../../services/modules/folder.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { Folder } from '../../../../models/Folders.model';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  folderData = {name: '', number: null, description: ''};
  folderForm: FormGroup;

  constructor(
              private router: Router, 
              public _folder: FolderService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this.folderForm = new FormGroup({
      'name': new FormControl(this.folderData.name, [Validators.required]),
      'number': new FormControl(this.folderData.number, [Validators.required]),
      'description': new FormControl(this.folderData.description, [Validators.required])
    });

  }

  send(){
    this._folder.add(new Folder(this.folderData), localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['../']);
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
