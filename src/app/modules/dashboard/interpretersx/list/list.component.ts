import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { InterpreterService } from '../../../../services/modules/interpreter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('interpreterViewStyle'))? 'table' : 
              localStorage.getItem('interpreterViewStyle');
  interpreters;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _interpreter: InterpreterService) {

    this.router.onSameUrlNavigation = "reload";
    this.route.url.subscribe((data) => {
      this.getInterpreters(Number(this.route.snapshot.params['page']) || 1);
    });
  }

  view(id){
    this.router.navigate([`./dashboard/interpreters/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/interpreters/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('interpreterViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('interpreterViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/interpreters/list/${pageNumber}`]);
  }

  getInterpreters(page: Number = 1){
    this._interpreter.list(page).subscribe(
      (interpreters) => {
        this.interpreters = interpreters;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getInterpreters(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }


}
