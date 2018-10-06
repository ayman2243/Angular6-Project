import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { DocumentsService } from '../../../../services/modules/documents.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  document;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _document: DocumentsService) {
    this._document.view(this.route.snapshot.params['id']).subscribe(
      (doc) =>{
        this.document = doc;
      },
      (err) =>{
        this.router.navigate(['dashboard/document/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
