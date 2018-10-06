import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';
import { DeleteComponent } from '../delete/delete.component';
import { Router, ActivatedRoute } from "@angular/router";
import { FolderService } from '../../../../services/modules/folder.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  folder;
  constructor(private modalService: MzModalService, private router: Router, private route: ActivatedRoute, public _folder: FolderService) {
    this._folder.view(this.route.snapshot.params['id']).subscribe(
      (fd) =>{
        this.folder = fd;
      },
      (err) =>{
        this.router.navigate(['dashboard/folders/list']);
      }
    );
  }

  delete(id, name){
    this.modalService.open(DeleteComponent, {id, name});
  }

  ngOnInit() {
  }

}
