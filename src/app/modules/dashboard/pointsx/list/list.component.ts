import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { PointsService } from '../../../../services/modules/points.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('pointViewStyle'))? 'table' : 
              localStorage.getItem('pointViewStyle');
  points;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _point: PointsService) {
    this.getPoints(Number(this.route.snapshot.params['page']) || 1);
  }

  view(id){
    this.router.navigate([`./dashboard/points/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/points/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('pointViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('pointViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/points/list/${pageNumber}`]);
  }

  getPoints(page: Number = 1){
    this._point.getAllPoints(page).subscribe(
      (po) => {
        this.points = po;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getPoints(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }

}
