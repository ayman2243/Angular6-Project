import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TopicService } from '../../../../services/modules/topic.service';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { Topics } from '../../../../models/topics.model';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import { AnnotationService } from '../../../../services/modules/annotation.service';
import { Annotation } from '../../../../models/Annotation.model';
import { FolderService } from '../../../../services/modules/folder.service';
import * as $ from "jquery";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  topicData = {
    headline: null,
    pageNumber: null,
    body: null,
    annotation: [],
    annotationTitle: [],
    folder: null,
    tags: []
  };
  topicForm: FormGroup;
  annotations = [];
  // annotationsTitle: [];
  folders;
  annotationData = {
    type: null,
    body: null,
    privateType: null,
    pageNumber: null,
    publicNumber: null,
    folder: null
  };
  annotationForm: FormGroup;

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '100%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters available.

    },
    complete: () => { //alert('Closed'); 
    } // Callback for Modal close
  };
  constructor(
    private router: Router,
    public _topic: TopicService,
    public _errHandler: ErrorHandlerService,
    public _folder: FolderService,
    private toastService: MzToastService,
    public _annotation: AnnotationService,
  ) {
    this.getAllFolders();
    this.topicForm = new FormGroup({
      headline: new FormControl(this.topicData.headline, [Validators.required]),
      pageNumber: new FormControl(this.topicData.pageNumber, [Validators.required]),
      body: new FormControl(this.topicData.body, [Validators.required]),
      folder: new FormControl(this.topicData.folder, [Validators.required]),
      tags: new FormControl(this.topicData.tags, [Validators.required])
    });
    this.annotationForm = new FormGroup({
      type: new FormControl(this.annotationData.type, [Validators.required]),
      body: new FormControl(this.annotationData.body, [Validators.required]),
      privateType: new FormControl(this.annotationData.privateType),
      pageNumber: new FormControl(this.annotationData.pageNumber, [Validators.required]),
      publicNumber: new FormControl(this.annotationData.publicNumber),
      folder: new FormControl(this.annotationData.folder, [Validators.required])
    });
  }

  send() {
    this._topic.add(new Topics(this.topicData), localStorage.getItem('token')).subscribe(
      (done) => {
        this.router.navigate(['dashboard', 'topics', 'list']);
      },
      (err) => {
        this.showToast(err);
      }
    )
  }

  sendAnnotation() {
    this._annotation.add(new Annotation(this.annotationData), localStorage.getItem('token')).subscribe(
      (done) => {
        let cursorPosition = $('#body').prop("selectionStart");
        this.topicData.annotation.push({ _id: done._id, charLocation: cursorPosition })
        console.log(this.topicData.annotation);
        this.annotationData = {
          type: null,
          body: null,
          privateType: null,
          pageNumber: null,
          publicNumber: null,
          folder: null
        };
        this.viewSubAnnotations();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  delete(id, name) {
    this._annotation.delete(id, localStorage.getItem('token')).subscribe(
      (done) => {
        console.log(done);
        this.topicData.annotation = this.topicData.annotation.filter((it) => it._id !== id);
        this.annotations = this.annotations.filter((it) => it._id !== id);
        console.log(this.topicData.annotation, this.annotations);
      }
    );
  }

  viewSubAnnotations() {
    this.topicData.annotation.forEach((annotation) => {
      this._annotation.view(annotation._id).subscribe(
        (anno) => {
          anno['location'] = annotation.charLocation;
          if (this.annotations.filter((it) => it._id === anno._id).length === 0)
            this.annotations.push(anno);
          console.log(anno);
        },
        (err) => {
          this.showToast(err);
        }
      );
    });
  }

  getAllFolders(){
    this._folder.listWithoutPagination().subscribe(
      fs => this.folders = fs,
      err => console.log(err)
    );
  }

  showToast(ms, err = true) {
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
      , 4000, 'red');
  }

  addAnnotation() {
    let cursorPosition = $('#body').prop("selectionStart");
    console.log(cursorPosition);
  }

  ngOnInit() {
  }

}
