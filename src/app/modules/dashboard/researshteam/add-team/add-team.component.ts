import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResearchTeamService } from '../../../../services/modules/research-team.service';
import { ResearchTeam } from '../../../../models/ResearchTeam.model';
import { ErrorHandlerService } from '../../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  teamData = {name: "",scientificDegree:"",role:"",committee:""};
  teamForm: FormGroup;

  constructor(
              private router: Router, 
              public _team: ResearchTeamService, 
              public _errHandler: ErrorHandlerService,
              private toastService: MzToastService,
              ) {
    this.teamForm = new FormGroup({
      'name': new FormControl(this.teamData.name, [Validators.required]),
      'scientificDegree': new FormControl(this.teamData.scientificDegree, [Validators.required]),
      'role': new FormControl(this.teamData.role, [Validators.required]),
      'committee': new FormControl(this.teamData.committee, [Validators.required]),
      
    });

  }

  send(){
    let team = new ResearchTeam(this.teamData);
    this._team.add(team, localStorage.getItem('token')).subscribe(
      (done) =>{
        this.router.navigate(['dashboard','team','list']);
      },
      (err) => {
        this.showToast(err);
      }
    )
  }

  showToast(ms, err = true){
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
    , 4000, 'red');
  }

  ngOnInit() {
  }

 

}
