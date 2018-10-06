import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteResourceComponent } from '../delete-resource/delete-resource.component';
import { Router, ActivatedRoute } from "@angular/router";
import { ResourcesService } from '../../../../services/modules/resources.service';

@Component({
  selector: 'app-view-resource',
  templateUrl: './view-resource.component.html',
  styleUrls: ['./view-resource.component.scss']
})
export class ViewResourceComponent implements OnInit {

  resource;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _resource: ResourcesService) {
    this._resource.view(this.route.snapshot.params['id']).subscribe(
      (rs) =>{
        this.resource = rs;
      },
      (err) =>{
        this.router.navigate(['dashboard/resource/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteResourceComponent,{id,name});
  }

  ngOnInit() {
  }
 
}
