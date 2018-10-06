import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FolderService } from '../../../../services/modules/folder.service';
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

  folderData = {name: '', number: null, description: ''};
  folderForm: FormGroup;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    public _folder: FolderService, 
    public _errHandler: ErrorHandlerService,
    private toastService: MzToastService
  ) {
    this._folder.view(this.route.snapshot.params['id']).subscribe(
      (fd) =>{
        Object.assign(this.folderData, fd);
      },
      (err) =>{ this.showToast(err); 
    });

    this.folderForm = new FormGroup({
      'name': new FormControl(this.folderData.name, [Validators.required]),
      'number': new FormControl(this.folderData.number, [Validators.required]),
      'description': new FormControl(this.folderData.description, [Validators.required])
    });
  }

  edit(){
    this._folder.edit(this.route.snapshot.params['id'],this.folderData, localStorage.getItem('token')).subscribe(
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
