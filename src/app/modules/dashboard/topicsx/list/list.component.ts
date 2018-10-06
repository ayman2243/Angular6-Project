import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { TopicService } from '../../../../services/modules/topic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('topicViewStyle'))? 'table' : 
              localStorage.getItem('topicViewStyle');
  topics;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _topic: TopicService) {
    this.router.onSameUrlNavigation = "reload";
    this.route.url.subscribe((data) => {
      this.getTopics(Number(this.route.snapshot.params['page']) || 1);
    });
  }

  view(id){
    this.router.navigate([`./dashboard/topics/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/topics/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('topicViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('topicViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`/dashboard/topics/list/${pageNumber}`]);
  }

  getTopics(page: Number = 1){
    this._topic.list(page).subscribe(
      (fs) => {
        this.topics = fs;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getTopics(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }

}
