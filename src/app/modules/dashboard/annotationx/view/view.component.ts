import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { AnnotationService } from '../../../../services/modules/annotation.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  annotation;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _annotation: AnnotationService) {
    this._annotation.view(this.route.snapshot.params['id']).subscribe(
      (annotation) =>{
        console.log(annotation);
        this.annotation = annotation;
      },
      (err) =>{
        this.router.navigate(['dashboard/annotations/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
