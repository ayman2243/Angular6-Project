import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { DocumentsService } from '../../../../services/modules/documents.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('documentViewStyle'))? 'table' : 
              localStorage.getItem('documentViewStyle');
  documents;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _document: DocumentsService) {

    this.router.onSameUrlNavigation = "reload";
    this.route.url.subscribe((data) => {
      this.getDocuments(Number(this.route.snapshot.params['page']) || 1);
    });
  }

  view(id){
    this.router.navigate([`/dashboard/documents/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`/dashboard/documents/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('documentViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('documentViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/documents/list/${pageNumber}`]);
  }

  getDocuments(page: Number = 1){
    this._document.list(page).subscribe(
      (docs) => {
        this.documents = docs;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getDocuments(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }


}
