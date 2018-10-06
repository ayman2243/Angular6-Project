import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { FolderService } from '../../../../services/modules/folder.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  viewStyle = (!localStorage.getItem('folderViewStyle'))? 'table' : 
              localStorage.getItem('folderViewStyle');
  folders;
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private modalService: MzModalService, 
              public _folder: FolderService) {

    this.router.onSameUrlNavigation = "reload";
    this.route.url.subscribe((data) => {
      this.getFolders(Number(this.route.snapshot.params['page']) || 1);
    });
  }

  view(id){
    this.router.navigate([`./dashboard/folders/view/${id}`]);
  }

  edit(id){
    this.router.navigate([`./dashboard/folders/edit/${id}`]);
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  changeView(vStyle){
    localStorage.setItem('folderViewStyle', vStyle);
    this.viewStyle = localStorage.getItem('folderViewStyle');
  }

  onPageChange(pageNumber){
    this.router.navigate([`./dashboard/folders/list/${pageNumber}`]);
  }

  getFolders(page: Number = 1){
    this._folder.list(page).subscribe(
      (fs) => {
        this.folders = fs;
      },
      (err) => console.log(err) 
    );
  }

  ngOnInit() {
    this.getFolders(Number(this.route.snapshot.params['page']) || 1);
  }

  ngOnDestroy(){
  }


}
