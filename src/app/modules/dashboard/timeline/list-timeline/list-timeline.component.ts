import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import {  DeleteTimelineComponent } from '../delete-timeline/delete-timeline.component';
import { TimelineService } from '../../../../services/modules/timeline.service';

@Component({
  selector: 'app-list-timeline',
  templateUrl: './list-timeline.component.html',
  styleUrls: ['./list-timeline.component.scss']
})
export class ListTimelineComponent implements OnInit {

  viewStyle = (!localStorage.getItem('timelineViewStyle'))? 'table' : 
  localStorage.getItem('timelineViewStyle');
timelines
constructor(private router: Router, 
  private route: ActivatedRoute, 
  private modalService: MzModalService, 
  public _timeline: TimelineService) {

this.router.onSameUrlNavigation = "reload";
this.route.url.subscribe((data) => {
this.gettimelines();
});
}

view(id){
this.router.navigate([`./dashboard/timeline/view/${id}`]);
}

edit(id){
this.router.navigate([`./dashboard/timeline/edit/${id}`]);
}

delete(id, name){
this.modalService.open( DeleteTimelineComponent, {id, name});
}

changeView(vStyle){
localStorage.setItem('timelineViewStyle', vStyle);
this.viewStyle = localStorage.getItem('timelineViewStyle');
}

gettimelines(){
this._timeline.list().subscribe(
(fs) => {
this.timelines = fs;
},
(err) => console.log(err) 
);
}

ngOnInit() {
this.gettimelines();
}

ngOnDestroy(){
}

}
