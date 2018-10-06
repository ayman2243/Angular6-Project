import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { InterpreterService } from '../../../../services/modules/interpreter.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  interpreter;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _interpreter: InterpreterService) {
    this._interpreter.view(this.route.snapshot.params['id']).subscribe(
      (interpreter) =>{
        this.interpreter = interpreter;
      },
      (err) =>{
        this.router.navigate(['dashboard/interpreters/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
