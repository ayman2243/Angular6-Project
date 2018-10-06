import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { TitlesService } from '../../../../services/modules/titles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('titleViewStyle'))? 'table' : 
              localStorage.getItem('titleViewStyle');
  titles;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _title: TitlesService) {
    this.getTitles(Number(this.route.snapshot.params['page']) || 1);
  }

  view(id){
    this.router.navigate([`./dashboard/titles/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/titles/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('titleViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('titleViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/titles/list/${pageNumber}`]);
  }

  getTitles(page: Number = 1){
    this._title.getAllTitles(page).subscribe(
      (ts) => {
        this.titles = ts;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getTitles(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }

}
