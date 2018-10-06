import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnotationService } from '../../../../services/modules/annotation.service';
import { FolderService } from '../../../../services/modules/folder.service';
import { Annotation } from '../../../../models/Annotation.model';
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

  optionsxx = [{key: 'عام', value: 'public'}, {key: 'خاص', value: 'private'}];
  oldData;
  annotationData = {type: '', body: '', publicNumber: null, privateType: '', pageNumber: ''};
  folder;
  annotationForm: FormGroup;
  folders;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private _annotation: AnnotationService, 
    private _folders: FolderService, 
    private _errHandler: ErrorHandlerService,
    private toastService: MzToastService
  ) {
    this.getAllFolders();
    this.getAnnotationData();
    this.annotationForm = new FormGroup({
      'type': new FormControl(this.annotationData.type, [Validators.required]),
      'publicNumber': new FormControl(this.annotationData.publicNumber),
      'privateType': new FormControl(this.annotationData.privateType),
      'pageNumber': new FormControl(this.annotationData.pageNumber, [Validators.required]),
      'body': new FormControl(this.annotationData.body, [Validators.required]),
      'folder': new FormControl(this.folder, [Validators.required])
    });
  }

  edit(){
    this.annotationData['folder'] = this.folder;
    let annotation = new Annotation(this.annotationData)
    this._annotation.edit(this.route.snapshot.params['id'],annotation, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','annotations','list']);
      },
      (err) => {
        this.showToast(err);
      }
    );
  }

  showToast(ms, err = true){
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
    , 4000, 'red');
  }

  getAnnotationData(){
    this._annotation.view(this.route.snapshot.params['id']).subscribe(
      (annotation) =>{
        this.oldData = annotation;
        Object.assign(this.annotationData, annotation);
      },
      (err) =>{ this.showToast(err); 
    });
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
