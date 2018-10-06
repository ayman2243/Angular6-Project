import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteTimelineComponent } from '../delete-timeline/delete-timeline.component';
import { Router, ActivatedRoute } from "@angular/router";
import { TimelineService } from '../../../../services/modules/timeline.service';

@Component({
  selector: 'app-view-timeline',
  templateUrl: './view-timeline.component.html',
  styleUrls: ['./view-timeline.component.scss']
})
export class ViewTimelineComponent implements OnInit {
  timeline;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _timeline: TimelineService) {
    this._timeline.view(this.route.snapshot.params['id']).subscribe(
      (tl) =>{
        this.timeline= tl;
      },
      (err) =>{
        this.router.navigate(['dashboard/timeline/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteTimelineComponent,{id,name});
  }

  ngOnInit() {
  }
 

}
