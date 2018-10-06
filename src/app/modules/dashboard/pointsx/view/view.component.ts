import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { PointsService } from '../../../../services/modules/points.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  point
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _point: PointsService) {
    this._point.getPoint(this.route.snapshot.params['id']).subscribe(
      (po) =>{
        this.point = po;
      },
      (err) =>{
        this.router.navigate(['dashboard/points/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
