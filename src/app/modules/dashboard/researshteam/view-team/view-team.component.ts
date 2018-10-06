import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteTeamComponent } from '../delete-team/delete-team.component';
import { Router, ActivatedRoute } from "@angular/router";
import { ResearchTeamService } from '../../../../services/modules/research-team.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {
  team;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _team: ResearchTeamService) {
    this._team.view(this.route.snapshot.params['id']).subscribe(
      (rs) =>{
        this.team= rs;
      },
      (err) =>{
        this.router.navigate(['dashboard/team/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteTeamComponent,{id,name});
  }

  ngOnInit() {
  }
 
}
