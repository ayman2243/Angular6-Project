import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnotationService } from '../../../../services/modules/annotation.service';
import { FolderService } from '../../../../services/modules/folder.service';
import { Annotation } from '../../../../models/Annotation.model';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  annotationData = {type: '', body: '', publicNumber: null, privateType: '', pageNumber: '', folder: '' };
  annotationForm: FormGroup;
  folders;

  constructor(
    private router: Router,
    private _folders: FolderService,
    private _annotation: AnnotationService,
    private _errHandler: ErrorHandlerService,
    private toastService: MzToastService,
  ) {
    this.getAllFolders();
    this.annotationForm = new FormGroup({
      'type': new FormControl(this.annotationData.type, [Validators.required]),
      'publicNumber': new FormControl(this.annotationData.publicNumber),
      'privateType': new FormControl(this.annotationData.privateType),
      'pageNumber': new FormControl(this.annotationData.pageNumber, [Validators.required]),
      'body': new FormControl(this.annotationData.body, [Validators.required]),
      'folder': new FormControl(this.annotationData.folder, [Validators.required])
    });
  }

  send() {
    let annotation = new Annotation(this.annotationData);
    this._annotation.add(annotation, localStorage.getItem('token')).subscribe(
      (done) => {
        this.router.navigate(['dashboard', 'annotations', 'list']);
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

  getAllFolders(){
    this._folders.listWithoutPagination().subscribe(
      (fs) => {
        this.folders = fs;
      }
    );
  }

  ngOnInit() {
  }

}
