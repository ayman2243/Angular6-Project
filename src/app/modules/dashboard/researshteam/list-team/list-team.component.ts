import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import {  DeleteTeamComponent } from '../delete-team/delete-team.component';
import { ResearchTeamService } from '../../../../services/modules/research-team.service';
@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.scss']
})
export class ListTeamComponent implements OnInit {
  viewStyle = (!localStorage.getItem('teamViewStyle'))? 'table' : 
  localStorage.getItem('teamViewStyle');
teams
constructor(private router: Router, 
  private route: ActivatedRoute, 
  private modalService: MzModalService, 
  public _team: ResearchTeamService) {

this.router.onSameUrlNavigation = "reload";
this.route.url.subscribe((data) => {
this.getteams();
});
}

view(id){
this.router.navigate([`./dashboard/team/view/${id}`]);
}

edit(id){
this.router.navigate([`./dashboard/team/edit/${id}`]);
}

delete(id, name){
this.modalService.open( DeleteTeamComponent, {id, name});
}

changeView(vStyle){
localStorage.setItem('teamViewStyle', vStyle);
this.viewStyle = localStorage.getItem('teamViewStyle');
}

getteams(){
this._team.list().subscribe(
(fs) => {
this.teams = fs;
},
(err) => console.log(err) 
);
}

ngOnInit() {
this.getteams();
}

ngOnDestroy(){
}
}
