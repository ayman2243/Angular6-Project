import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import {  DeleteResourceComponent } from '../delete-resource/delete-resource.component';
import { ResourcesService } from '../../../../services/modules/resources.service';

@Component({
  selector: 'app-list-resource',
  templateUrl: './list-resource.component.html',
  styleUrls: ['./list-resource.component.scss']
})
export class ListResourceComponent implements OnInit {
  viewStyle = (!localStorage.getItem('resourceViewStyle'))? 'table' : 
  localStorage.getItem('resourceViewStyle');
resources;
constructor(private router: Router, 
  private route: ActivatedRoute, 
  private modalService: MzModalService, 
  public _resource: ResourcesService) {

this.router.onSameUrlNavigation = "reload";
this.route.url.subscribe((data) => {
this.getresources();
});
}

view(id){
this.router.navigate([`./dashboard/resource/view/${id}`]);
}

edit(id){
this.router.navigate([`./dashboard/resource/edit/${id}`]);
}

delete(id, name){
this.modalService.open( DeleteResourceComponent, {id, name});
}

changeView(vStyle){
localStorage.setItem('resourceViewStyle', vStyle);
this.viewStyle = localStorage.getItem('resourceViewStyle');
}

getresources(){
this._resource.list().subscribe(
(fs) => {
this.resources = fs;
},
(err) => console.log(err) 
);
}

ngOnInit() {
this.getresources();
}

ngOnDestroy(){
}

}
