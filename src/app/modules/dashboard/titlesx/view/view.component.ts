import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { TitlesService } from '../../../../services/modules/titles.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  title
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _title: TitlesService) {
    this._title.getTitle(this.route.snapshot.params['id']).subscribe(
      (ts) =>{
        console.log(ts);
        this.title = ts;
      },
      (err) =>{
        this.router.navigate(['dashboard/titles/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
