import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { TopicService } from '../../../../services/modules/topic.service';
import { AnnotationService } from '../../../../services/modules/annotation.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  annotations = [];
  topic
  constructor(
      private modalService: MzModalService, 
      private router: Router, 
      private route: ActivatedRoute, 
      public _topic: TopicService,
      public _annotation: AnnotationService) {

    this._topic.view(this.route.snapshot.params['id']).subscribe(
      (tp) => {
        console.log(tp);
        this.topic = tp;
      },
      (err) => {
        this.router.navigate(['dashboard/topics/list']);
      }
    );
  }

  edit(id){
    this.router.navigate([`dashboard/annotations/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
