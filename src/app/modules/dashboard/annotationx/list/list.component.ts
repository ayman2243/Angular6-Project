import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { AnnotationService } from '../../../../services/modules/annotation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('annotationViewStyle'))? 'table' : 
              localStorage.getItem('annotationViewStyle');
  annotations;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _annotation: AnnotationService) {
    this.router.onSameUrlNavigation = "reload";
    this.route.url.subscribe((data) => {
      this.getAnnotations(Number(this.route.snapshot.params['page']) || 1);
    });
  }

  view(id){
    this.router.navigate([`./dashboard/annotations/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/annotations/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('annotationViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('annotationViewStyle');
  }

  getAnnotations(page: Number = 1){
    this._annotation.list(page).subscribe(
      (annotations) => {
        console.log(annotations);
        this.annotations = annotations;
      },
      (err) => console.log(err) 
    );
  }
  

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/annotations/list/${pageNumber}`]);
  }
  ngOnInit() {
    this.getAnnotations(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }


}
